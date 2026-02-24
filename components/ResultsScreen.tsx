import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, Clock, CheckCircle2, RotateCcw, Home, ListChecks,
  TrendingUp, TrendingDown, Minus, Target, Star, AlertCircle,
} from 'lucide-react';
import { QuizResult, Badge } from '../types';
import { Button } from './Button';

interface ResultsScreenProps {
  result: QuizResult;
  newBadges: Badge[];
  onHome: () => void;
  onRetry: () => void;
  onReview: () => void;
}

// ─── Topic breakdown helpers ──────────────────────────────────────────────────

interface TopicStat {
  topic: string;
  correct: number;
  total: number;
  pct: number;
}

function buildTopicStats(result: QuizResult): TopicStat[] {
  const map: Record<string, { correct: number; total: number }> = {};

  for (const q of result.questions) {
    const topic = q.topic || 'General';
    if (!map[topic]) map[topic] = { correct: 0, total: 0 };
    map[topic].total += 1;

    const userAnswer = result.userAnswers[q.id];
    if (
      userAnswer &&
      userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()
    ) {
      map[topic].correct += 1;
    }
  }

  return Object.entries(map)
    .map(([topic, { correct, total }]) => ({
      topic,
      correct,
      total,
      pct: Math.round((correct / total) * 100),
    }))
    .sort((a, b) => b.pct - a.pct);
}

function performanceLabel(pct: number): {
  label: string;
  color: string;
  bg: string;
  bar: string;
  icon: React.ReactNode;
} {
  if (pct >= 80)
    return {
      label: 'Excelling',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200',
      bar: 'bg-emerald-500',
      icon: <TrendingUp size={13} className="text-emerald-600" />,
    };
  if (pct >= 50)
    return {
      label: 'On track',
      color: 'text-amber-700',
      bg: 'bg-amber-50 border-amber-200',
      bar: 'bg-amber-400',
      icon: <Minus size={13} className="text-amber-500" />,
    };
  return {
    label: 'Needs work',
    color: 'text-rose-700',
    bg: 'bg-rose-50 border-rose-200',
    bar: 'bg-rose-500',
    icon: <TrendingDown size={13} className="text-rose-600" />,
  };
}

// ─── Score ring ───────────────────────────────────────────────────────────────

function ScoreRing({ pct }: { pct: number }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const dash = (pct / 100) * circumference;
  const color =
    pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#f43f5e';

  return (
    <div className="relative inline-flex items-center justify-center w-28 h-28">
      <svg
        className="rotate-[-90deg]"
        width="112"
        height="112"
        viewBox="0 0 112 112"
      >
        <circle
          cx="56" cy="56" r={r}
          fill="none" stroke="#e2e8f0" strokeWidth="8"
        />
        <circle
          cx="56" cy="56" r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-slate-900">{pct}%</span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Score
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  result,
  newBadges,
  onHome,
  onRetry,
  onReview,
}) => {
  const percentage = Math.round((result.score / result.total) * 100);
  const topicStats = useMemo(() => buildTopicStats(result), [result]);

  // Only show breakdown when there are meaningful distinct topics
  const hasTopics =
    topicStats.length > 0 &&
    !(topicStats.length === 1 && topicStats[0].topic === 'General');

  const excelling = topicStats.filter((t) => t.pct >= 80);
  const needsWork = topicStats.filter((t) => t.pct < 50);

  const headline =
    percentage >= 80
      ? 'Excellent Work!'
      : percentage >= 50
      ? 'Good Effort!'
      : 'Practice Makes Perfect';

  const formatTime = (s: number) => {
    if (s < 60) return `${s}s`;
    return `${Math.floor(s / 60)}m ${s % 60}s`;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4">

      {/* ── Main score card ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <ScoreRing pct={percentage} />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-black text-slate-900 mb-1">
              {headline}
            </h2>
            <p className="text-slate-500 text-sm">
              {result.score} of {result.total} correct &middot; {result.subject}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
            <Clock size={18} className="text-blue-500 shrink-0" />
            <div>
              <div className="text-sm font-black text-slate-900">
                {formatTime(result.timeTaken)}
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                Time taken
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
            <Target size={18} className="text-indigo-500 shrink-0" />
            <div>
              <div className="text-sm font-black text-slate-900">
                {result.total} Qs
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                Questions
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        {newBadges.length > 0 && (
          <div className="mb-6 bg-amber-50 border border-amber-100 p-4 rounded-xl">
            <h3 className="text-amber-800 font-bold mb-3 flex items-center gap-2 text-sm">
              <Trophy size={14} /> New Badges Unlocked
            </h3>
            <div className="flex flex-wrap gap-2">
              {newBadges.map((badge) => (
                <span
                  key={badge.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-bold text-amber-700 shadow-sm border border-amber-100"
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button onClick={onReview} variant="outline" className="w-full justify-center">
            <ListChecks size={16} /> Review Answers
          </Button>
          <div className="flex gap-3">
            <Button onClick={onHome} variant="ghost" className="flex-1 justify-center">
              <Home size={16} /> Home
            </Button>
            <Button onClick={onRetry} variant="primary" className="flex-1 justify-center">
              <RotateCcw size={16} /> Try Again
            </Button>
          </div>
        </div>
      </motion.div>

      {/* ── Topic performance breakdown ──────────────────────────────────── */}
      {hasTopics && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Star size={14} className="text-indigo-600" />
            </div>
            <h3 className="font-black text-slate-900">Topic Breakdown</h3>
            <span className="text-xs text-slate-400 font-medium ml-auto">
              {topicStats.length} topics
            </span>
          </div>

          {/* Per-topic bars */}
          <div className="space-y-3">
            {topicStats.map((t, i) => {
              const perf = performanceLabel(t.pct);
              return (
                <motion.div
                  key={t.topic}
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      {perf.icon}
                      <span className="text-sm font-semibold text-slate-700 truncate">
                        {t.topic}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${perf.bg} ${perf.color}`}
                      >
                        {perf.label}
                      </span>
                      <span className="text-xs font-black text-slate-600 w-10 text-right">
                        {t.correct}/{t.total}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${perf.bar}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${t.pct}%` }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary callout pills */}
          {(excelling.length > 0 || needsWork.length > 0) && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {excelling.length > 0 && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wide">
                      Excelling in
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {excelling.map((t) => (
                      <span
                        key={t.topic}
                        className="text-[11px] font-bold bg-white text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200"
                      >
                        {t.topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {needsWork.length > 0 && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <AlertCircle size={13} className="text-rose-600" />
                    <span className="text-[11px] font-black text-rose-700 uppercase tracking-wide">
                      Focus on
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {needsWork.map((t) => (
                      <span
                        key={t.topic}
                        className="text-[11px] font-bold bg-white text-rose-700 px-2 py-0.5 rounded-full border border-rose-200"
                      >
                        {t.topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
};
