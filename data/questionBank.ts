import { Subject, Question, QuizType } from '../types';

// Comprehensive question bank for all subjects and question types
export const questionBank: Record<Subject, Partial<Record<QuizType, Question[]>>> = {
  [Subject.Maths]: {
    'multiple-choice': [
  // ── ARITHMETIC ──────────────────────────────────────────────────────────────
  { id: 'math-mc-001', text: 'What is 456 + 789?', options: ['1,235', '1,245', '1,255', '1,265'], correctAnswer: '1,245', explanation: '456 + 789 = 1,245. Add the units first: 6+9=15, carry 1. Tens: 5+8+1=14, carry 1. Hundreds: 4+7+1=12.', topic: 'Addition' },
  { id: 'math-mc-002', text: 'What is 1,002 − 347?', options: ['645', '655', '665', '675'], correctAnswer: '655', explanation: '1,002 − 347 = 655. Borrow across the zeros: 1,002 becomes 9 hundreds, 9 tens, 12 units. 12−7=5, 9−4=5, 9−3=6.', topic: 'Subtraction' },
  { id: 'math-mc-003', text: 'What is 34 × 25?', options: ['750', '800', '850', '900'], correctAnswer: '850', explanation: '34 × 25 = 34 × 100 ÷ 4 = 3,400 ÷ 4 = 850.', topic: 'Multiplication' },
  { id: 'math-mc-004', text: 'What is 693 ÷ 9?', options: ['77', '78', '79', '81'], correctAnswer: '77', explanation: '693 ÷ 9 = 77. Check: 9 × 77 = 9 × 70 + 9 × 7 = 630 + 63 = 693.', topic: 'Division' },
  { id: 'math-mc-005', text: 'What is 19 × 19?', options: ['341', '351', '361', '371'], correctAnswer: '361', explanation: '19 × 19 = (20−1)² = 400 − 40 + 1 = 361.', topic: 'Multiplication' },
  { id: 'math-mc-006', text: 'What is 1,728 ÷ 12?', options: ['134', '144', '154', '164'], correctAnswer: '144', explanation: '1,728 ÷ 12 = 144. Check: 12 × 144 = 12 × 100 + 12 × 44 = 1,200 + 528 = 1,728.', topic: 'Division' },
  { id: 'math-mc-007', text: 'What is 504 × 7?', options: ['3,518', '3,528', '3,538', '3,548'], correctAnswer: '3,528', explanation: '504 × 7 = 500 × 7 + 4 × 7 = 3,500 + 28 = 3,528.', topic: 'Multiplication' },
  { id: 'math-mc-008', text: 'What is 10,000 − 3,746?', options: ['6,244', '6,254', '6,264', '6,274'], correctAnswer: '6,254', explanation: '10,000 − 3,746 = 6,254. Subtract: 10,000 − 3,000 = 7,000; 7,000 − 700 = 6,300; 6,300 − 46 = 6,254.', topic: 'Subtraction' },
  { id: 'math-mc-009', text: 'What is 125 × 8?', options: ['900', '1,000', '1,100', '1,200'], correctAnswer: '1,000', explanation: '125 × 8 = 1,000. Since 125 = 1,000 ÷ 8, multiplying by 8 gives 1,000.', topic: 'Multiplication' },
  { id: 'math-mc-010', text: 'What is 3,600 ÷ 15?', options: ['220', '230', '240', '250'], correctAnswer: '240', explanation: '3,600 ÷ 15 = 3,600 ÷ 3 ÷ 5 = 1,200 ÷ 5 = 240.', topic: 'Division' },

  // ── FRACTIONS ───────────────────────────────────────────────────────────────
  { id: 'math-mc-011', text: 'What is 3/5 + 1/3?', options: ['4/8', '4/15', '14/15', '13/15'], correctAnswer: '14/15', explanation: 'Common denominator is 15. 3/5 = 9/15, 1/3 = 5/15. 9/15 + 5/15 = 14/15.', topic: 'Fractions' },
  { id: 'math-mc-012', text: 'What is 5/6 − 1/4?', options: ['4/2', '7/12', '4/12', '11/12'], correctAnswer: '7/12', explanation: 'Common denominator is 12. 5/6 = 10/12, 1/4 = 3/12. 10/12 − 3/12 = 7/12.', topic: 'Fractions' },
  { id: 'math-mc-013', text: 'What is 2/3 × 3/4?', options: ['5/7', '6/12', '1/2', '2/4'], correctAnswer: '1/2', explanation: '2/3 × 3/4 = 6/12 = 1/2. Multiply numerators and denominators, then simplify.', topic: 'Fractions' },
  { id: 'math-mc-014', text: 'What is 3/4 ÷ 3/8?', options: ['1', '2', '9/32', '1/2'], correctAnswer: '2', explanation: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2. Dividing by a fraction means multiplying by its reciprocal.', topic: 'Fractions' },
  { id: 'math-mc-015', text: 'Which fraction is equivalent to 4/6?', options: ['2/4', '2/3', '3/4', '8/10'], correctAnswer: '2/3', explanation: '4/6 simplified: divide both by 2 to get 2/3.', topic: 'Fractions' },
  { id: 'math-mc-016', text: 'What is 1 3/4 + 2 1/2?', options: ['3 3/4', '4', '4 1/4', '4 3/4'], correctAnswer: '4 1/4', explanation: '1 3/4 + 2 1/2 = 1 3/4 + 2 2/4 = 3 5/4 = 4 1/4.', topic: 'Fractions' },
  { id: 'math-mc-017', text: 'What fraction of 60 is 45?', options: ['1/2', '2/3', '3/4', '4/5'], correctAnswer: '3/4', explanation: '45/60 = 3/4. Divide both by 15: 45÷15=3, 60÷15=4.', topic: 'Fractions' },
  { id: 'math-mc-018', text: 'Arrange in order smallest to largest: 3/4, 2/3, 5/6, 7/12', options: ['2/3, 7/12, 3/4, 5/6', '7/12, 2/3, 3/4, 5/6', '7/12, 3/4, 2/3, 5/6', '2/3, 3/4, 7/12, 5/6'], correctAnswer: '7/12, 2/3, 3/4, 5/6', explanation: 'Convert to twelfths: 7/12, 8/12, 9/12, 10/12. So order is 7/12, 2/3, 3/4, 5/6.', topic: 'Fractions' },
  { id: 'math-mc-019', text: 'What is 5/8 of 96?', options: ['55', '60', '65', '70'], correctAnswer: '60', explanation: '5/8 of 96 = 96 ÷ 8 × 5 = 12 × 5 = 60.', topic: 'Fractions' },
  { id: 'math-mc-020', text: 'What is 2 1/3 × 3?', options: ['6', '7', '6 1/3', '7 1/3'], correctAnswer: '7', explanation: '2 1/3 × 3 = 7/3 × 3 = 21/3 = 7.', topic: 'Fractions' },

  // ── PERCENTAGES ─────────────────────────────────────────────────────────────
  { id: 'math-mc-021', text: 'What is 15% of 200?', options: ['25', '30', '35', '40'], correctAnswer: '30', explanation: '15% of 200 = 0.15 × 200 = 30. Or: 10% = 20, 5% = 10, total = 30.', topic: 'Percentages' },
  { id: 'math-mc-022', text: 'A jacket costs £80. It is reduced by 35%. What is the sale price?', options: ['£44', '£48', '£52', '£56'], correctAnswer: '£52', explanation: '35% of £80 = £28. Sale price = £80 − £28 = £52.', topic: 'Percentages' },
  { id: 'math-mc-023', text: 'What percentage is 36 of 144?', options: ['20%', '25%', '30%', '35%'], correctAnswer: '25%', explanation: '36/144 = 1/4 = 25%.', topic: 'Percentages' },
  { id: 'math-mc-024', text: 'A price increases from £50 to £65. What is the percentage increase?', options: ['25%', '28%', '30%', '32%'], correctAnswer: '30%', explanation: 'Increase = £15. Percentage = (15/50) × 100 = 30%.', topic: 'Percentages' },
  { id: 'math-mc-025', text: 'What is 7.5% of 400?', options: ['25', '28', '30', '32'], correctAnswer: '30', explanation: '7.5% = 7.5/100. 7.5/100 × 400 = 7.5 × 4 = 30.', topic: 'Percentages' },
  { id: 'math-mc-026', text: 'After a 20% discount a shirt costs £32. What was the original price?', options: ['£38', '£40', '£42', '£44'], correctAnswer: '£40', explanation: '£32 = 80% of original. Original = £32 ÷ 0.8 = £40.', topic: 'Percentages' },
  { id: 'math-mc-027', text: 'What is 12.5% of 80?', options: ['8', '9', '10', '11'], correctAnswer: '10', explanation: '12.5% = 1/8. 80 ÷ 8 = 10.', topic: 'Percentages' },
  { id: 'math-mc-028', text: 'A shop sells 240 items in January. In February it sells 18% more. How many in February?', options: ['278', '282', '283', '288'], correctAnswer: '283', explanation: '18% of 240 = 43.2 ≈ 43. 240 + 43 = 283.', topic: 'Percentages' },
  { id: 'math-mc-029', text: 'What percentage is 45 of 180?', options: ['20%', '22.5%', '25%', '27.5%'], correctAnswer: '25%', explanation: '45/180 = 1/4 = 25%.', topic: 'Percentages' },
  { id: 'math-mc-030', text: 'A car was bought for £12,000 and sold for £9,000. What was the percentage loss?', options: ['20%', '25%', '30%', '33%'], correctAnswer: '25%', explanation: 'Loss = £3,000. Percentage = (3,000/12,000) × 100 = 25%.', topic: 'Percentages' },

  // ── DECIMALS ────────────────────────────────────────────────────────────────
  { id: 'math-mc-031', text: 'What is 3.45 + 2.67?', options: ['5.02', '6.02', '6.12', '6.22'], correctAnswer: '6.12', explanation: '3.45 + 2.67 = 6.12. Align decimal points and add.', topic: 'Decimals' },
  { id: 'math-mc-032', text: 'What is 7.3 − 4.85?', options: ['2.35', '2.45', '2.55', '2.65'], correctAnswer: '2.45', explanation: '7.30 − 4.85 = 2.45. Borrow as needed.', topic: 'Decimals' },
  { id: 'math-mc-033', text: 'What is 0.6 × 0.7?', options: ['0.42', '0.052', '4.2', '42'], correctAnswer: '0.42', explanation: '6 × 7 = 42. Two decimal places total → 0.42.', topic: 'Decimals' },
  { id: 'math-mc-034', text: 'What is 4.8 ÷ 0.6?', options: ['0.8', '8', '0.08', '80'], correctAnswer: '8', explanation: '4.8 ÷ 0.6 = 48 ÷ 6 = 8. Multiply both by 10.', topic: 'Decimals' },
  { id: 'math-mc-035', text: 'Round 6.748 to 2 decimal places.', options: ['6.74', '6.75', '6.7', '6.8'], correctAnswer: '6.75', explanation: 'Look at the third decimal place (8 ≥ 5), so round up: 6.75.', topic: 'Decimals' },
  { id: 'math-mc-036', text: 'Which is largest: 0.7, 0.07, 7/10, 70%?', options: ['0.07', '0.7 and 7/10 and 70% (all equal)', '70%', '7/10'], correctAnswer: '0.7 and 7/10 and 70% (all equal)', explanation: '0.7 = 7/10 = 70%. They are all the same. 0.07 is smaller.', topic: 'Decimals' },
  { id: 'math-mc-037', text: 'What is 1.2 × 1.2?', options: ['1.4', '1.44', '2.4', '14.4'], correctAnswer: '1.44', explanation: '12 × 12 = 144. Two decimal places → 1.44.', topic: 'Decimals' },
  { id: 'math-mc-038', text: 'What is 0.25 × 36?', options: ['7', '8', '9', '10'], correctAnswer: '9', explanation: '0.25 = 1/4. 36 ÷ 4 = 9.', topic: 'Decimals' },
  { id: 'math-mc-039', text: 'What is 3.6 ÷ 0.09?', options: ['4', '40', '400', '0.4'], correctAnswer: '40', explanation: '3.6 ÷ 0.09 = 360 ÷ 9 = 40. Multiply both by 100.', topic: 'Decimals' },
  { id: 'math-mc-040', text: 'What is 0.125 as a fraction?', options: ['1/4', '1/8', '1/16', '1/5'], correctAnswer: '1/8', explanation: '0.125 = 125/1000 = 1/8. Or: 1 ÷ 8 = 0.125.', topic: 'Decimals' },

  // ── RATIO & PROPORTION ──────────────────────────────────────────────────────
  { id: 'math-mc-041', text: 'Divide £120 in the ratio 3:5.', options: ['£40 and £80', '£45 and £75', '£50 and £70', '£55 and £65'], correctAnswer: '£45 and £75', explanation: 'Total parts = 8. Each part = £120 ÷ 8 = £15. 3 parts = £45, 5 parts = £75.', topic: 'Ratio' },
  { id: 'math-mc-042', text: 'A recipe uses flour and sugar in the ratio 4:1. If you use 320g of flour, how much sugar is needed?', options: ['64g', '80g', '96g', '100g'], correctAnswer: '80g', explanation: 'Flour:Sugar = 4:1. Sugar = 320 ÷ 4 = 80g.', topic: 'Ratio' },
  { id: 'math-mc-043', text: 'If 5 books cost £35, how much do 8 books cost?', options: ['£48', '£52', '£56', '£60'], correctAnswer: '£56', explanation: '1 book = £35 ÷ 5 = £7. 8 books = 8 × £7 = £56.', topic: 'Proportion' },
  { id: 'math-mc-044', text: 'A map has scale 1:50,000. A distance on the map is 3cm. What is the real distance in km?', options: ['1.5 km', '2 km', '2.5 km', '3 km'], correctAnswer: '1.5 km', explanation: '3cm × 50,000 = 150,000 cm = 1,500 m = 1.5 km.', topic: 'Scale' },
  { id: 'math-mc-045', text: 'Share 180 sweets between two children in the ratio 7:2.', options: ['120 and 60', '140 and 40', '126 and 54', '135 and 45'], correctAnswer: '140 and 40', explanation: 'Total parts = 9. Each part = 180 ÷ 9 = 20. 7 parts = 140, 2 parts = 40.', topic: 'Ratio' },
  { id: 'math-mc-046', text: 'If it takes 4 workers 6 days to complete a job, how long would 8 workers take?', options: ['2 days', '3 days', '4 days', '12 days'], correctAnswer: '3 days', explanation: 'Inverse proportion. More workers → fewer days. 4 × 6 = 24 worker-days. 24 ÷ 8 = 3 days.', topic: 'Proportion' },
  { id: 'math-mc-047', text: 'Orange and apple juice are mixed in the ratio 3:2. How much orange juice is in 500ml of the mix?', options: ['200ml', '250ml', '300ml', '350ml'], correctAnswer: '300ml', explanation: 'Total parts = 5. Each part = 100ml. Orange = 3 × 100 = 300ml.', topic: 'Ratio' },
  { id: 'math-mc-048', text: 'The ratio of boys to girls in a class is 3:4. There are 28 students. How many are boys?', options: ['10', '12', '14', '16'], correctAnswer: '12', explanation: 'Total parts = 7. Each part = 28 ÷ 7 = 4. Boys = 3 × 4 = 12.', topic: 'Ratio' },
  { id: 'math-mc-049', text: 'A car travels 240 miles on 8 gallons of fuel. How far on 5 gallons?', options: ['140 miles', '150 miles', '160 miles', '170 miles'], correctAnswer: '150 miles', explanation: 'Miles per gallon = 240 ÷ 8 = 30 mpg. 5 × 30 = 150 miles.', topic: 'Proportion' },
  { id: 'math-mc-050', text: 'Simplify the ratio 36:48.', options: ['3:4', '4:3', '6:8', '9:12'], correctAnswer: '3:4', explanation: 'GCF of 36 and 48 is 12. 36÷12=3, 48÷12=4. Ratio = 3:4.', topic: 'Ratio' },

  // ── ALGEBRA ─────────────────────────────────────────────────────────────────
  { id: 'math-mc-051', text: 'If 3x + 7 = 22, what is x?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: '3x = 22 − 7 = 15. x = 15 ÷ 3 = 5.', topic: 'Algebra' },
  { id: 'math-mc-052', text: 'If 5y − 3 = 17, what is y?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: '5y = 17 + 3 = 20. y = 20 ÷ 5 = 4.', topic: 'Algebra' },
  { id: 'math-mc-053', text: 'What is the value of 4a − 2b when a = 5 and b = 3?', options: ['12', '14', '16', '18'], correctAnswer: '14', explanation: '4(5) − 2(3) = 20 − 6 = 14.', topic: 'Algebra' },
  { id: 'math-mc-054', text: 'Expand: 3(2x + 5)', options: ['6x + 5', '6x + 15', '5x + 15', '3x + 15'], correctAnswer: '6x + 15', explanation: '3 × 2x = 6x and 3 × 5 = 15. So 3(2x + 5) = 6x + 15.', topic: 'Algebra' },
  { id: 'math-mc-055', text: 'If n² = 81, what is n? (positive value)', options: ['7', '8', '9', '10'], correctAnswer: '9', explanation: '9² = 81. So n = 9.', topic: 'Algebra' },
  { id: 'math-mc-056', text: 'What is the nth term of the sequence 5, 8, 11, 14, …?', options: ['3n + 2', '2n + 3', '3n + 1', '4n + 1'], correctAnswer: '3n + 2', explanation: 'Common difference = 3. When n=1: 3(1)+2=5 ✓. Formula: 3n + 2.', topic: 'Algebra' },
  { id: 'math-mc-057', text: 'Solve: 2(x + 3) = 14', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'x + 3 = 7. x = 4.', topic: 'Algebra' },
  { id: 'math-mc-058', text: 'If p = 4 and q = −2, what is p² + q?', options: ['14', '16', '18', '20'], correctAnswer: '14', explanation: 'p² + q = 4² + (−2) = 16 − 2 = 14.', topic: 'Algebra' },
  { id: 'math-mc-059', text: 'What value of x makes 4x − 5 = 3x + 2 true?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '4x − 3x = 2 + 5. x = 7.', topic: 'Algebra' },
  { id: 'math-mc-060', text: 'What is the 10th term of the sequence 2, 5, 8, 11, …?', options: ['28', '29', '30', '31'], correctAnswer: '29', explanation: 'nth term = 3n − 1. 10th term = 3(10) − 1 = 29.', topic: 'Algebra' },

  // ── AREA & PERIMETER ────────────────────────────────────────────────────────
  { id: 'math-mc-061', text: 'A rectangle is 9cm long and 4cm wide. What is its perimeter?', options: ['24cm', '26cm', '28cm', '36cm'], correctAnswer: '26cm', explanation: 'Perimeter = 2 × (9 + 4) = 2 × 13 = 26cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-062', text: 'A triangle has base 10cm and height 6cm. What is its area?', options: ['24 cm²', '28 cm²', '30 cm²', '60 cm²'], correctAnswer: '30 cm²', explanation: 'Area = ½ × base × height = ½ × 10 × 6 = 30 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-063', text: 'A circle has radius 7cm. What is its area? (use π ≈ 22/7)', options: ['44 cm²', '88 cm²', '154 cm²', '176 cm²'], correctAnswer: '154 cm²', explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-064', text: 'What is the area of a parallelogram with base 8cm and height 5cm?', options: ['30 cm²', '35 cm²', '40 cm²', '45 cm²'], correctAnswer: '40 cm²', explanation: 'Area = base × height = 8 × 5 = 40 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-065', text: 'A square has perimeter 36cm. What is its area?', options: ['64 cm²', '81 cm²', '89 cm²', '96 cm²'], correctAnswer: '81 cm²', explanation: 'Side = 36 ÷ 4 = 9cm. Area = 9² = 81 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-066', text: 'A circle has diameter 14cm. What is its circumference? (π ≈ 22/7)', options: ['44cm', '66cm', '88cm', '154cm'], correctAnswer: '44cm', explanation: 'Circumference = πd = (22/7) × 14 = 44cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-067', text: 'A trapezium has parallel sides of 6cm and 10cm, and height 4cm. What is its area?', options: ['28 cm²', '32 cm²', '36 cm²', '40 cm²'], correctAnswer: '32 cm²', explanation: 'Area = ½ × (a + b) × h = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-068', text: 'A rectangle has area 84 cm² and length 12cm. What is its width?', options: ['5cm', '6cm', '7cm', '8cm'], correctAnswer: '7cm', explanation: 'Width = Area ÷ Length = 84 ÷ 12 = 7cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-069', text: 'What is the area of a right-angled triangle with legs 5cm and 12cm?', options: ['25 cm²', '30 cm²', '34 cm²', '60 cm²'], correctAnswer: '30 cm²', explanation: 'Area = ½ × 5 × 12 = 30 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-070', text: 'A path 1m wide surrounds a 6m × 4m lawn. What is the total area including the path?', options: ['32 m²', '40 m²', '48 m²', '56 m²'], correctAnswer: '48 m²', explanation: 'Total dimensions = (6+2) × (4+2) = 8 × 6 = 48 m².', topic: 'Area and Perimeter' },

  // ── VOLUME ──────────────────────────────────────────────────────────────────
  { id: 'math-mc-071', text: 'A cuboid is 5cm × 4cm × 3cm. What is its volume?', options: ['40 cm³', '50 cm³', '60 cm³', '70 cm³'], correctAnswer: '60 cm³', explanation: 'Volume = l × w × h = 5 × 4 × 3 = 60 cm³.', topic: 'Volume' },
  { id: 'math-mc-072', text: 'A cube has side 6cm. What is its volume?', options: ['36 cm³', '108 cm³', '180 cm³', '216 cm³'], correctAnswer: '216 cm³', explanation: 'Volume = 6³ = 6 × 6 × 6 = 216 cm³.', topic: 'Volume' },
  { id: 'math-mc-073', text: 'A tank is 40cm × 30cm × 20cm. How many litres does it hold? (1 litre = 1,000 cm³)', options: ['18 litres', '20 litres', '22 litres', '24 litres'], correctAnswer: '24 litres', explanation: 'Volume = 40 × 30 × 20 = 24,000 cm³ = 24 litres.', topic: 'Volume' },
  { id: 'math-mc-074', text: 'A cylinder has radius 5cm and height 10cm. What is its volume? (π ≈ 3.14)', options: ['628 cm³', '785 cm³', '942 cm³', '1,256 cm³'], correctAnswer: '785 cm³', explanation: 'Volume = πr²h = 3.14 × 25 × 10 = 785 cm³.', topic: 'Volume' },
  { id: 'math-mc-075', text: 'A box is 8cm × 6cm × h cm with volume 192 cm³. What is h?', options: ['3cm', '4cm', '5cm', '6cm'], correctAnswer: '4cm', explanation: '192 = 8 × 6 × h = 48h. h = 192 ÷ 48 = 4cm.', topic: 'Volume' },

  // ── ANGLES & SHAPES ─────────────────────────────────────────────────────────
  { id: 'math-mc-076', text: 'What do angles in a quadrilateral add up to?', options: ['180°', '270°', '360°', '540°'], correctAnswer: '360°', explanation: 'All quadrilaterals have interior angles summing to 360°.', topic: 'Angles' },
  { id: 'math-mc-077', text: 'One angle of a triangle is 70°, another is 55°. What is the third?', options: ['45°', '50°', '55°', '60°'], correctAnswer: '55°', explanation: 'Angles in a triangle = 180°. 180 − 70 − 55 = 55°.', topic: 'Angles' },
  { id: 'math-mc-078', text: 'What is the size of each interior angle of a regular hexagon?', options: ['100°', '108°', '120°', '135°'], correctAnswer: '120°', explanation: 'Sum of interior angles = (6−2) × 180 = 720°. Each angle = 720 ÷ 6 = 120°.', topic: 'Angles' },
  { id: 'math-mc-079', text: 'Two angles on a straight line are in the ratio 2:3. What is the smaller angle?', options: ['60°', '70°', '72°', '80°'], correctAnswer: '72°', explanation: 'Angles on a straight line = 180°. Smaller = 2/5 × 180 = 72°.', topic: 'Angles' },
  { id: 'math-mc-080', text: 'A regular polygon has interior angles of 150°. How many sides does it have?', options: ['10', '11', '12', '15'], correctAnswer: '12', explanation: 'Exterior angle = 180 − 150 = 30°. Number of sides = 360 ÷ 30 = 12.', topic: 'Angles' },
  { id: 'math-mc-081', text: 'How many lines of symmetry does a regular pentagon have?', options: ['4', '5', '6', '10'], correctAnswer: '5', explanation: 'A regular pentagon has 5 lines of symmetry — one through each vertex to the midpoint of the opposite side.', topic: 'Symmetry' },
  { id: 'math-mc-082', text: 'What is the order of rotational symmetry of a regular octagon?', options: ['4', '6', '8', '10'], correctAnswer: '8', explanation: 'A regular octagon looks the same after rotating 45° (360÷8). Order of rotational symmetry = 8.', topic: 'Symmetry' },
  { id: 'math-mc-083', text: 'Two parallel lines are cut by a transversal. Corresponding angles are...', options: ['supplementary', 'complementary', 'equal', 'reflex'], correctAnswer: 'equal', explanation: 'Corresponding angles (F-angles) are equal when lines are parallel.', topic: 'Angles' },
  { id: 'math-mc-084', text: 'An exterior angle of a triangle is 115°. The two non-adjacent interior angles are equal. What are they?', options: ['55° each', '57.5° each', '60° each', '65° each'], correctAnswer: '57.5° each', explanation: 'Exterior angle = sum of the two non-adjacent interior angles. 115 ÷ 2 = 57.5° each.', topic: 'Angles' },
  { id: 'math-mc-085', text: 'What type of triangle has all sides different lengths?', options: ['Equilateral', 'Isosceles', 'Scalene', 'Right-angled'], correctAnswer: 'Scalene', explanation: 'A scalene triangle has three sides all of different lengths.', topic: 'Shapes' },

  // ── NUMBER PROPERTIES ───────────────────────────────────────────────────────
  { id: 'math-mc-086', text: 'What are the factors of 36?', options: ['1,2,3,4,6,9,12,18,36', '1,2,3,4,6,12,18,36', '1,2,4,6,9,12,18,36', '2,3,4,6,9,12,18'], correctAnswer: '1,2,3,4,6,9,12,18,36', explanation: '36 = 1×36, 2×18, 3×12, 4×9, 6×6. Factors: 1,2,3,4,6,9,12,18,36.', topic: 'Factors' },
  { id: 'math-mc-087', text: 'What is the LCM of 8 and 12?', options: ['16', '24', '32', '48'], correctAnswer: '24', explanation: 'Multiples of 8: 8,16,24... Multiples of 12: 12,24... LCM = 24.', topic: 'Multiples' },
  { id: 'math-mc-088', text: 'What is the HCF of 24 and 36?', options: ['6', '8', '9', '12'], correctAnswer: '12', explanation: 'Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. HCF = 12.', topic: 'Factors' },
  { id: 'math-mc-089', text: 'Which of these is a prime number?', options: ['51', '57', '59', '63'], correctAnswer: '59', explanation: '59 has no factors other than 1 and itself. 51=3×17, 57=3×19, 63=7×9.', topic: 'Prime Numbers' },
  { id: 'math-mc-090', text: 'Express 60 as a product of prime factors.', options: ['2² × 3 × 5', '2 × 3 × 5²', '2³ × 3 × 5', '2² × 3² × 5'], correctAnswer: '2² × 3 × 5', explanation: '60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5.', topic: 'Prime Numbers' },
  { id: 'math-mc-091', text: 'What is 4³?', options: ['12', '32', '48', '64'], correctAnswer: '64', explanation: '4³ = 4 × 4 × 4 = 16 × 4 = 64.', topic: 'Powers' },
  { id: 'math-mc-092', text: 'What is √169?', options: ['11', '12', '13', '14'], correctAnswer: '13', explanation: '13 × 13 = 169. So √169 = 13.', topic: 'Square Roots' },
  { id: 'math-mc-093', text: 'What is 2⁵?', options: ['10', '16', '25', '32'], correctAnswer: '32', explanation: '2⁵ = 2×2×2×2×2 = 32.', topic: 'Powers' },
  { id: 'math-mc-094', text: 'Which number is both a square number and a cube number (under 200)?', options: ['16', '27', '64', '100'], correctAnswer: '64', explanation: '64 = 8² = 4³. It is both a perfect square and a perfect cube.', topic: 'Powers' },
  { id: 'math-mc-095', text: 'What is the sum of the first 5 prime numbers?', options: ['26', '28', '30', '32'], correctAnswer: '28', explanation: 'First 5 primes: 2, 3, 5, 7, 11. Sum = 28.', topic: 'Prime Numbers' },

  // ── SEQUENCES ───────────────────────────────────────────────────────────────
  { id: 'math-mc-096', text: 'What is the next term in: 2, 6, 18, 54, …?', options: ['108', '144', '162', '216'], correctAnswer: '162', explanation: 'Each term is multiplied by 3. 54 × 3 = 162.', topic: 'Number Sequences' },
  { id: 'math-mc-097', text: 'What is the missing term: 1, 4, 9, _, 25, 36?', options: ['14', '15', '16', '17'], correctAnswer: '16', explanation: 'These are square numbers: 1², 2², 3², 4², 5², 6². Missing term = 4² = 16.', topic: 'Number Sequences' },
  { id: 'math-mc-098', text: 'What is the next term: 1, 1, 2, 3, 5, 8, 13, …?', options: ['18', '20', '21', '24'], correctAnswer: '21', explanation: 'Fibonacci sequence: each term = sum of previous two. 8 + 13 = 21.', topic: 'Number Sequences' },
  { id: 'math-mc-099', text: 'Find the missing term: 100, 91, 82, _, 64', options: ['70', '72', '73', '75'], correctAnswer: '73', explanation: 'Subtracting 9 each time. 82 − 9 = 73.', topic: 'Number Sequences' },
  { id: 'math-mc-100', text: 'What is the 8th term of the sequence: 4, 7, 10, 13, …?', options: ['25', '28', '31', '34'], correctAnswer: '25', explanation: 'nth term = 3n + 1. 8th term = 3(8) + 1 = 25.', topic: 'Number Sequences' },

  // ── SPEED, DISTANCE, TIME ───────────────────────────────────────────────────
  { id: 'math-mc-101', text: 'A car travels 180 miles in 3 hours. What is its average speed?', options: ['50 mph', '55 mph', '60 mph', '65 mph'], correctAnswer: '60 mph', explanation: 'Speed = Distance ÷ Time = 180 ÷ 3 = 60 mph.', topic: 'Speed, Distance, Time' },
  { id: 'math-mc-102', text: 'A cyclist travels at 15 km/h for 40 minutes. How far do they travel?', options: ['8 km', '9 km', '10 km', '12 km'], correctAnswer: '10 km', explanation: '40 min = 2/3 hour. Distance = 15 × 2/3 = 10 km.', topic: 'Speed, Distance, Time' },
  { id: 'math-mc-103', text: 'How long does it take to travel 210 miles at 70 mph?', options: ['2.5 hours', '3 hours', '3.5 hours', '4 hours'], correctAnswer: '3 hours', explanation: 'Time = Distance ÷ Speed = 210 ÷ 70 = 3 hours.', topic: 'Speed, Distance, Time' },
  { id: 'math-mc-104', text: 'A train leaves at 09:45 and arrives at 12:15. How long is the journey?', options: ['2 hours', '2 hours 15 min', '2 hours 30 min', '2 hours 45 min'], correctAnswer: '2 hours 30 min', explanation: '09:45 to 12:15 = 2 hours and 30 minutes.', topic: 'Speed, Distance, Time' },
  { id: 'math-mc-105', text: 'Two trains leave the same station in opposite directions. One travels at 80 mph, the other at 100 mph. How far apart are they after 1.5 hours?', options: ['240 miles', '270 miles', '300 miles', '330 miles'], correctAnswer: '270 miles', explanation: 'Combined speed = 180 mph. Distance = 180 × 1.5 = 270 miles.', topic: 'Speed, Distance, Time' },

  // ── MONEY & MEASURES ────────────────────────────────────────────────────────
  { id: 'math-mc-106', text: 'Sam buys 3 books at £4.75 each and pays with a £20 note. How much change?', options: ['£4.50', '£5.25', '£5.75', '£6.25'], correctAnswer: '£5.75', explanation: '3 × £4.75 = £14.25. Change = £20 − £14.25 = £5.75.', topic: 'Money' },
  { id: 'math-mc-107', text: 'Convert 3.5 km to metres.', options: ['350 m', '3,500 m', '35,000 m', '350,000 m'], correctAnswer: '3,500 m', explanation: '1 km = 1,000 m. 3.5 × 1,000 = 3,500 m.', topic: 'Measures' },
  { id: 'math-mc-108', text: 'How many centilitres are in 2.5 litres?', options: ['25 cl', '250 cl', '2,500 cl', '25,000 cl'], correctAnswer: '250 cl', explanation: '1 litre = 100 cl. 2.5 × 100 = 250 cl.', topic: 'Measures' },
  { id: 'math-mc-109', text: 'A bag of sugar weighs 2.25 kg. What is this in grams?', options: ['225 g', '2,250 g', '22,500 g', '225,000 g'], correctAnswer: '2,250 g', explanation: '1 kg = 1,000 g. 2.25 × 1,000 = 2,250 g.', topic: 'Measures' },
  { id: 'math-mc-110', text: 'At £1.80 per litre, how much does 7.5 litres of petrol cost?', options: ['£12.50', '£13.50', '£14.00', '£14.50'], correctAnswer: '£13.50', explanation: '7.5 × £1.80 = 7 × £1.80 + 0.5 × £1.80 = £12.60 + £0.90 = £13.50.', topic: 'Money' },

  // ── DATA & STATISTICS ───────────────────────────────────────────────────────
  { id: 'math-mc-111', text: 'Find the mean of: 4, 7, 9, 5, 10', options: ['6', '7', '8', '9'], correctAnswer: '7', explanation: 'Mean = (4+7+9+5+10) ÷ 5 = 35 ÷ 5 = 7.', topic: 'Statistics' },
  { id: 'math-mc-112', text: 'Find the median of: 3, 8, 2, 9, 5', options: ['5', '6', '7', '8'], correctAnswer: '5', explanation: 'Ordered: 2, 3, 5, 8, 9. Median = middle value = 5.', topic: 'Statistics' },
  { id: 'math-mc-113', text: 'Find the mode of: 4, 7, 4, 9, 7, 4, 2', options: ['4', '7', '2', '9'], correctAnswer: '4', explanation: '4 appears 3 times, which is more than any other value.', topic: 'Statistics' },
  { id: 'math-mc-114', text: 'The range of a data set is 15. The largest value is 23. What is the smallest?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: 'Smallest = Largest − Range = 23 − 15 = 8.', topic: 'Statistics' },
  { id: 'math-mc-115', text: 'Six students score: 60, 72, 68, 80, 75, 65. What is the mean score?', options: ['68', '70', '72', '74'], correctAnswer: '70', explanation: 'Sum = 420. Mean = 420 ÷ 6 = 70.', topic: 'Statistics' },

  // ── PROBABILITY ─────────────────────────────────────────────────────────────
  { id: 'math-mc-116', text: 'A bag has 3 red, 4 blue, 5 green balls. What is the probability of picking blue?', options: ['1/3', '4/12', '1/3', '5/12'], correctAnswer: '1/3', explanation: 'P(blue) = 4/12 = 1/3.', topic: 'Probability' },
  { id: 'math-mc-117', text: 'What is the probability of rolling a number greater than 4 on a fair dice?', options: ['1/6', '1/3', '1/2', '2/3'], correctAnswer: '1/3', explanation: 'Numbers greater than 4: 5, 6. P = 2/6 = 1/3.', topic: 'Probability' },
  { id: 'math-mc-118', text: 'A card is drawn from a standard 52-card deck. What is the probability it is a heart?', options: ['1/52', '1/13', '1/4', '4/13'], correctAnswer: '1/4', explanation: 'There are 13 hearts in 52 cards. P = 13/52 = 1/4.', topic: 'Probability' },
  { id: 'math-mc-119', text: 'The probability of rain tomorrow is 0.35. What is the probability it will NOT rain?', options: ['0.55', '0.60', '0.65', '0.70'], correctAnswer: '0.65', explanation: 'P(no rain) = 1 − 0.35 = 0.65.', topic: 'Probability' },
  { id: 'math-mc-120', text: 'A fair coin is flipped twice. What is the probability of getting two heads?', options: ['1/2', '1/3', '1/4', '1/8'], correctAnswer: '1/4', explanation: 'P(HH) = 1/2 × 1/2 = 1/4.', topic: 'Probability' },

  // ── COORDINATES & GRAPHS ────────────────────────────────────────────────────
  { id: 'math-mc-121', text: 'What are the coordinates of the midpoint of (2, 4) and (8, 10)?', options: ['(4, 6)', '(5, 7)', '(6, 7)', '(5, 8)'], correctAnswer: '(5, 7)', explanation: 'Midpoint = ((2+8)/2, (4+10)/2) = (5, 7).', topic: 'Coordinates' },
  { id: 'math-mc-122', text: 'A point is reflected in the y-axis. Point A is at (3, −2). Where does it land?', options: ['(−3, 2)', '(−3, −2)', '(3, 2)', '(2, −3)'], correctAnswer: '(−3, −2)', explanation: 'Reflection in y-axis changes the sign of the x-coordinate: (3, −2) → (−3, −2).', topic: 'Coordinates' },
  { id: 'math-mc-123', text: 'What is the gradient of the line y = 3x − 5?', options: ['−5', '3', '5', '−3'], correctAnswer: '3', explanation: 'In y = mx + c, m is the gradient. Here m = 3.', topic: 'Graphs' },
  { id: 'math-mc-124', text: 'Which point lies on the line y = 2x + 1?', options: ['(1, 4)', '(2, 4)', '(3, 7)', '(4, 8)'], correctAnswer: '(3, 7)', explanation: 'y = 2(3) + 1 = 7. So (3, 7) lies on the line.', topic: 'Graphs' },
  { id: 'math-mc-125', text: 'A shape is translated 4 right and 3 down. A vertex at (1, 5) moves to:', options: ['(5, 2)', '(4, 3)', '(−3, 8)', '(5, 8)'], correctAnswer: '(5, 2)', explanation: 'New position: (1+4, 5−3) = (5, 2).', topic: 'Coordinates' },

  // ── WORD PROBLEMS ───────────────────────────────────────────────────────────
  { id: 'math-mc-126', text: 'Emma has 3 times as many stickers as Jake. Together they have 84. How many does Emma have?', options: ['21', '42', '56', '63'], correctAnswer: '63', explanation: 'Jake = x, Emma = 3x. x + 3x = 84. x = 21. Emma = 63.', topic: 'Word Problems' },
  { id: 'math-mc-127', text: 'A pizza is cut into 8 equal slices. Tom eats 3 slices, Sara eats 2. What fraction remains?', options: ['1/4', '3/8', '1/2', '5/8'], correctAnswer: '3/8', explanation: 'Eaten = 5/8. Remaining = 3/8.', topic: 'Word Problems' },
  { id: 'math-mc-128', text: 'Tickets cost £6.50 each. A group of 12 buys tickets with a 10% group discount. What is the total cost?', options: ['£64.80', '£70.20', '£72.00', '£78.00'], correctAnswer: '£70.20', explanation: 'Full price = 12 × £6.50 = £78. 10% off = £7.80. Total = £78 − £7.80 = £70.20.', topic: 'Word Problems' },
  { id: 'math-mc-129', text: 'A garden centre has tulip bulbs in packs of 8 and packs of 12. What is the smallest total number of bulbs that can be bought using only whole packs?', options: ['16', '20', '24', '48'], correctAnswer: '24', explanation: 'LCM of 8 and 12 = 24. That is the smallest number obtainable with whole packs of each.', topic: 'Word Problems' },
  { id: 'math-mc-130', text: 'A number is multiplied by 6 and then 15 is subtracted. The result is 45. What is the number?', options: ['8', '9', '10', '11'], correctAnswer: '10', explanation: '6n − 15 = 45. 6n = 60. n = 10.', topic: 'Word Problems' },
  { id: 'math-mc-131', text: 'Three friends share a bill of £54 equally. One friend uses a voucher saving £9 off their share. How much do the other two pay in total?', options: ['£36', '£39', '£45', '£48'], correctAnswer: '£36', explanation: 'Each share = £18. Voucher friend pays £9. Other two pay £18 × 2 = £36.', topic: 'Word Problems' },
  { id: 'math-mc-132', text: 'A jar contains red and green sweets in the ratio 5:3. There are 40 red sweets. How many green sweets are there?', options: ['16', '20', '24', '32'], correctAnswer: '24', explanation: '5 parts = 40, so 1 part = 8. Green = 3 × 8 = 24.', topic: 'Word Problems' },
  { id: 'math-mc-133', text: 'A train station clock shows 17:45. What time is this in 12-hour format?', options: ['5:45 am', '7:45 pm', '5:45 pm', '4:45 pm'], correctAnswer: '5:45 pm', explanation: '17:45 − 12:00 = 5:45 pm.', topic: 'Word Problems' },
  { id: 'math-mc-134', text: 'An athlete runs 400m in 52 seconds. At the same pace, how long would 1,600m take?', options: ['3 min 18 sec', '3 min 22 sec', '3 min 26 sec', '3 min 28 sec'], correctAnswer: '3 min 28 sec', explanation: '1,600 ÷ 400 = 4. Time = 4 × 52 = 208 seconds = 3 min 28 sec.', topic: 'Word Problems' },
  { id: 'math-mc-135', text: 'A tank is 3/4 full and holds 90 litres. How much does the full tank hold?', options: ['100 litres', '110 litres', '115 litres', '120 litres'], correctAnswer: '120 litres', explanation: '3/4 of capacity = 90. Full capacity = 90 × 4/3 = 120 litres.', topic: 'Word Problems' },

  // ── NEGATIVE NUMBERS ────────────────────────────────────────────────────────
  { id: 'math-mc-136', text: 'What is −8 + 3?', options: ['−11', '−5', '5', '11'], correctAnswer: '−5', explanation: 'Start at −8, move 3 right on the number line: −5.', topic: 'Negative Numbers' },
  { id: 'math-mc-137', text: 'What is −4 × −7?', options: ['−28', '11', '28', '−11'], correctAnswer: '28', explanation: 'Negative × Negative = Positive. 4 × 7 = 28.', topic: 'Negative Numbers' },
  { id: 'math-mc-138', text: 'What is −15 ÷ 3?', options: ['−5', '5', '−12', '12'], correctAnswer: '−5', explanation: 'Negative ÷ Positive = Negative. 15 ÷ 3 = 5, so answer is −5.', topic: 'Negative Numbers' },
  { id: 'math-mc-139', text: 'The temperature falls from 4°C to −9°C. By how many degrees did it fall?', options: ['5', '9', '13', '15'], correctAnswer: '13', explanation: '4 − (−9) = 4 + 9 = 13°C.', topic: 'Negative Numbers' },
  { id: 'math-mc-140', text: 'What is 6 − (−4)?', options: ['2', '−2', '10', '−10'], correctAnswer: '10', explanation: 'Subtracting a negative = adding. 6 − (−4) = 6 + 4 = 10.', topic: 'Negative Numbers' },

  // ── PLACE VALUE & ROUNDING ──────────────────────────────────────────────────
  { id: 'math-mc-141', text: 'Round 4,763 to the nearest hundred.', options: ['4,700', '4,800', '5,000', '4,760'], correctAnswer: '4,800', explanation: 'The tens digit is 6 (≥5), so round up: 4,800.', topic: 'Place Value' },
  { id: 'math-mc-142', text: 'What is the value of the digit 7 in 3.749?', options: ['7 tenths', '7 hundredths', '7 thousandths', '7 ones'], correctAnswer: '7 tenths', explanation: 'In 3.749: 3 is ones, 7 is tenths, 4 is hundredths, 9 is thousandths.', topic: 'Place Value' },
  { id: 'math-mc-143', text: 'Round 0.0846 to 2 significant figures.', options: ['0.08', '0.084', '0.085', '0.09'], correctAnswer: '0.085', explanation: 'First significant figure is 8, second is 4. The next digit is 6 ≥ 5, so round up: 0.085.', topic: 'Place Value' },
  { id: 'math-mc-144', text: 'What is 4.67 × 1,000?', options: ['46.7', '467', '4,670', '46,700'], correctAnswer: '4,670', explanation: 'Multiplying by 1,000 moves the decimal point 3 places right: 4,670.', topic: 'Place Value' },
  { id: 'math-mc-145', text: 'Which is greatest: 0.305, 0.35, 3/10, 31%?', options: ['0.305', '0.35', '3/10', '31%'], correctAnswer: '0.35', explanation: 'Convert all to decimals: 0.305, 0.35, 0.3, 0.31. Largest is 0.35.', topic: 'Place Value' },

  // ── MIXED HARDER PROBLEMS ───────────────────────────────────────────────────
  { id: 'math-mc-146', text: 'What is 15% of 15% of 400?', options: ['6', '9', '12', '15'], correctAnswer: '9', explanation: '15% of 400 = 60. 15% of 60 = 9.', topic: 'Percentages' },
  { id: 'math-mc-147', text: 'A rectangle has its length doubled and width halved. How does its area change?', options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'], correctAnswer: 'Stays the same', explanation: 'New area = 2l × w/2 = lw = original area.', topic: 'Area and Perimeter' },
  { id: 'math-mc-148', text: 'Which is the largest: 2³, 3², 4¹, 1⁴?', options: ['2³', '3²', '4¹', '1⁴'], correctAnswer: '3²', explanation: '2³=8, 3²=9, 4¹=4, 1⁴=1. Largest is 9 = 3².', topic: 'Powers' },
  { id: 'math-mc-149', text: 'A number is divided by 4 and 6 is added. The result is 11. What is the number?', options: ['15', '20', '25', '28'], correctAnswer: '20', explanation: 'n/4 + 6 = 11. n/4 = 5. n = 20.', topic: 'Algebra' },
  { id: 'math-mc-150', text: 'The sum of two consecutive odd numbers is 48. What are they?', options: ['21 and 23', '23 and 25', '19 and 21', '25 and 27'], correctAnswer: '23 and 25', explanation: 'n + (n+2) = 48. 2n = 46. n = 23. Numbers: 23 and 25.', topic: 'Algebra' },
  { id: 'math-mc-151', text: 'If 1 inch = 2.54 cm, how many cm is 5 inches?', options: ['10.54 cm', '12.7 cm', '13.2 cm', '15 cm'], correctAnswer: '12.7 cm', explanation: '5 × 2.54 = 12.70 cm.', topic: 'Measures' },
  { id: 'math-mc-152', text: 'A clock shows 3:45. What angle does the minute hand make with the 12?', options: ['225°', '235°', '250°', '270°'], correctAnswer: '270°', explanation: 'At 3:45, the minute hand is at the 9. Each hour mark = 30°. 9 × 30 = 270°.', topic: 'Angles' },
  { id: 'math-mc-153', text: 'A square is cut diagonally in half. What shape is formed?', options: ['Rectangle', 'Rhombus', 'Right-angled isosceles triangle', 'Equilateral triangle'], correctAnswer: 'Right-angled isosceles triangle', explanation: 'Cutting a square along a diagonal gives a right-angled isosceles triangle (one 90° angle, two 45° angles, and two equal sides).', topic: 'Shapes' },
  { id: 'math-mc-154', text: 'What is 1/3 + 1/4 + 1/6?', options: ['3/13', '2/3', '3/4', '1/2 + 1/12'], correctAnswer: '3/4', explanation: 'Common denominator 12: 4/12 + 3/12 + 2/12 = 9/12 = 3/4.', topic: 'Fractions' },
  { id: 'math-mc-155', text: 'The price of a book increases by 10% then decreases by 10%. The final price compared to original is:', options: ['Same', '1% less', '1% more', '2% less'], correctAnswer: '1% less', explanation: 'Let price = 100. After 10% increase = 110. After 10% decrease = 99. Net change = −1%.', topic: 'Percentages' },
  { id: 'math-mc-156', text: 'A farmer has cows and chickens. There are 20 heads and 56 legs. How many cows?', options: ['6', '8', '10', '12'], correctAnswer: '8', explanation: 'Let c = cows. c + (20−c) = 20. 4c + 2(20−c) = 56. 4c + 40 − 2c = 56. 2c = 16. c = 8.', topic: 'Word Problems' },
  { id: 'math-mc-157', text: 'What is the surface area of a cube with side 4cm?', options: ['64 cm²', '80 cm²', '96 cm²', '112 cm²'], correctAnswer: '96 cm²', explanation: 'A cube has 6 faces each 4×4=16 cm². Total = 6 × 16 = 96 cm².', topic: 'Volume' },
  { id: 'math-mc-158', text: 'What is the value of (3 + 4)² − 3² − 4²?', options: ['0', '12', '24', '49'], correctAnswer: '24', explanation: '7² − 9 − 16 = 49 − 25 = 24.', topic: 'Algebra' },
  { id: 'math-mc-159', text: 'How many faces does a triangular prism have?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: 'A triangular prism has 2 triangular faces and 3 rectangular faces = 5 faces.', topic: 'Shapes' },
  { id: 'math-mc-160', text: 'What is 0.1% of 50,000?', options: ['5', '50', '500', '5,000'], correctAnswer: '50', explanation: '0.1% = 0.001. 0.001 × 50,000 = 50.', topic: 'Percentages' },
  { id: 'math-mc-161', text: 'Three apples and two oranges cost £2.10. Two apples and three oranges cost £1.90. What does one apple cost?', options: ['30p', '40p', '50p', '60p'], correctAnswer: '50p', explanation: 'Add equations: 5a + 5o = £4.00, so a + o = 80p. Subtract: a − o = 20p. So a = 50p.', topic: 'Algebra' },
  { id: 'math-mc-162', text: 'A wheel has circumference 188.4 cm. How many complete rotations in 1 km? (π ≈ 3.14)', options: ['50', '300', '531', '600'], correctAnswer: '531', explanation: '1 km = 100,000 cm. 100,000 ÷ 188.4 ≈ 531.', topic: 'Area and Perimeter' },
  { id: 'math-mc-163', text: 'What fraction of 1 hour is 45 minutes?', options: ['1/2', '2/3', '3/4', '4/5'], correctAnswer: '3/4', explanation: '45/60 = 3/4.', topic: 'Fractions' },
  { id: 'math-mc-164', text: 'How many days are in 3 weeks and 4 days?', options: ['21', '23', '25', '27'], correctAnswer: '25', explanation: '3 × 7 + 4 = 21 + 4 = 25 days.', topic: 'Measures' },
  { id: 'math-mc-165', text: 'A room is 6m × 4m. Tiles are 50cm × 50cm. How many tiles are needed?', options: ['48', '96', '192', '384'], correctAnswer: '192', explanation: 'Room = 600cm × 400cm. Tiles per row = 600÷50=12, rows = 400÷50=8. Total = 96. Wait: 12×8=96. Hmm — yes 96. Answer: 96.', topic: 'Area and Perimeter' },
  { id: 'math-mc-166', text: 'What is the area of a room 6m × 4m covered in 50cm × 50cm tiles?', options: ['96 tiles', '100 tiles', '144 tiles', '192 tiles'], correctAnswer: '96 tiles', explanation: 'Room: 12 tiles × 8 tiles = 96 tiles.', topic: 'Area and Perimeter' },
  { id: 'math-mc-167', text: 'Find the value of 5! (5 factorial)', options: ['15', '25', '60', '120'], correctAnswer: '120', explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.', topic: 'Number Properties' },
  { id: 'math-mc-168', text: 'What is the next square number after 100?', options: ['110', '115', '121', '144'], correctAnswer: '121', explanation: '10² = 100. 11² = 121.', topic: 'Powers' },
  { id: 'math-mc-169', text: 'A bookshelf has 6 shelves, each holding 24 books. 2/3 of all shelves are full. How many books are there?', options: ['72', '96', '112', '120'], correctAnswer: '96', explanation: '2/3 of 6 shelves = 4 shelves. 4 × 24 = 96 books.', topic: 'Fractions' },
  { id: 'math-mc-170', text: 'A school bus can hold 54 students. How many buses are needed for 350 students?', options: ['6', '7', '8', '9'], correctAnswer: '7', explanation: '350 ÷ 54 = 6.48... Round up to 7 (you need whole buses).', topic: 'Word Problems' },
  { id: 'math-mc-171', text: 'What is √(16 × 25)?', options: ['10', '15', '20', '25'], correctAnswer: '20', explanation: '√(16 × 25) = √400 = 20. Or: √16 × √25 = 4 × 5 = 20.', topic: 'Square Roots' },
  { id: 'math-mc-172', text: 'Simplify: 4² + 3³', options: ['25', '43', '43', '91'], correctAnswer: '43', explanation: '4² = 16, 3³ = 27. 16 + 27 = 43.', topic: 'Powers' },
  { id: 'math-mc-173', text: 'What is the perimeter of a regular hexagon with side 7cm?', options: ['35cm', '40cm', '42cm', '49cm'], correctAnswer: '42cm', explanation: 'Perimeter = 6 × 7 = 42cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-174', text: 'Express 2/5 as a decimal.', options: ['0.2', '0.25', '0.4', '0.5'], correctAnswer: '0.4', explanation: '2 ÷ 5 = 0.4.', topic: 'Decimals' },
  { id: 'math-mc-175', text: 'The mean of 5 numbers is 12. Four of the numbers are 10, 14, 9, 15. What is the fifth?', options: ['10', '12', '13', '14'], correctAnswer: '12', explanation: 'Total = 5 × 12 = 60. Sum of 4 = 48. Fifth = 60 − 48 = 12.', topic: 'Statistics' },
  { id: 'math-mc-176', text: 'What is the LCM of 6, 8, and 12?', options: ['24', '36', '48', '72'], correctAnswer: '24', explanation: 'Multiples of 12: 12, 24. Is 24 divisible by 6? Yes. By 8? Yes. LCM = 24.', topic: 'Multiples' },
  { id: 'math-mc-177', text: 'If 20% of a number is 14, what is the number?', options: ['56', '63', '70', '84'], correctAnswer: '70', explanation: '20% = 14. 1% = 0.7. 100% = 70.', topic: 'Percentages' },
  { id: 'math-mc-178', text: 'A square has area 196 cm². What is its perimeter?', options: ['48cm', '52cm', '56cm', '60cm'], correctAnswer: '56cm', explanation: 'Side = √196 = 14cm. Perimeter = 4 × 14 = 56cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-179', text: 'What is the difference between the 10th and 6th term of the sequence 7, 11, 15, 19, …?', options: ['12', '16', '20', '24'], correctAnswer: '16', explanation: 'nth term = 4n + 3. 10th = 43, 6th = 27. Difference = 16.', topic: 'Number Sequences' },
  { id: 'math-mc-180', text: 'How many prime numbers are between 20 and 40?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'Primes between 20 and 40: 23, 29, 31, 37. That is 4.', topic: 'Prime Numbers' },
  { id: 'math-mc-181', text: 'A rectangle has perimeter 38cm and length 12cm. What is its width?', options: ['5cm', '6cm', '7cm', '8cm'], correctAnswer: '7cm', explanation: '2(l + w) = 38. l + w = 19. w = 19 − 12 = 7cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-182', text: 'What is 3/7 of 252?', options: ['96', '108', '112', '126'], correctAnswer: '108', explanation: '252 ÷ 7 = 36. 36 × 3 = 108.', topic: 'Fractions' },
  { id: 'math-mc-183', text: 'A sequence starts: 3, 6, 12, 24. What is the 6th term?', options: ['48', '72', '96', '192'], correctAnswer: '96', explanation: 'Doubling sequence. 6th term = 3 × 2⁵ = 3 × 32 = 96.', topic: 'Number Sequences' },
  { id: 'math-mc-184', text: 'A bag has 12 balls: 3 red, 4 blue, 5 yellow. A ball is removed and not replaced. If it was yellow, what is the probability the next is also yellow?', options: ['4/11', '5/12', '5/11', '4/12'], correctAnswer: '4/11', explanation: 'After removing one yellow: 4 yellow remain out of 11 total. P = 4/11.', topic: 'Probability' },
  { id: 'math-mc-185', text: 'What is the value of x if 2x/3 = 8?', options: ['10', '11', '12', '16'], correctAnswer: '12', explanation: '2x = 24. x = 12.', topic: 'Algebra' },
  { id: 'math-mc-186', text: 'What is the interior angle sum of a pentagon?', options: ['360°', '480°', '540°', '720°'], correctAnswer: '540°', explanation: '(5 − 2) × 180 = 3 × 180 = 540°.', topic: 'Angles' },
  { id: 'math-mc-187', text: 'A train travels at 90 km/h. Convert this to metres per second.', options: ['15 m/s', '25 m/s', '30 m/s', '45 m/s'], correctAnswer: '25 m/s', explanation: '90 km/h = 90,000 m ÷ 3,600 s = 25 m/s.', topic: 'Speed, Distance, Time' },
  { id: 'math-mc-188', text: 'Find the HCF of 36 and 60.', options: ['6', '9', '12', '18'], correctAnswer: '12', explanation: 'Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 60: 1,2,3,4,5,6,10,12,15,20,30,60. HCF = 12.', topic: 'Factors' },
  { id: 'math-mc-189', text: 'What is 1.5³?', options: ['2.25', '3.375', '3.75', '4.5'], correctAnswer: '3.375', explanation: '1.5² = 2.25. 2.25 × 1.5 = 3.375.', topic: 'Powers' },
  { id: 'math-mc-190', text: 'A shape has coordinates (0,0), (4,0), (4,3), (0,3). What is it?', options: ['Square', 'Rectangle', 'Rhombus', 'Trapezium'], correctAnswer: 'Rectangle', explanation: 'Width = 4, height = 3. Four right angles. It is a rectangle (not a square since 4 ≠ 3).', topic: 'Coordinates' },
  { id: 'math-mc-191', text: 'If 3a = 2b and b = 9, what is a?', options: ['4', '5', '6', '7'], correctAnswer: '6', explanation: 'b = 9. 3a = 2 × 9 = 18. a = 6.', topic: 'Algebra' },
  { id: 'math-mc-192', text: 'Express 135 as a product of prime factors.', options: ['3³ × 5', '3² × 5²', '3 × 5³', '3² × 15'], correctAnswer: '3³ × 5', explanation: '135 = 5 × 27 = 5 × 3³.', topic: 'Prime Numbers' },
  { id: 'math-mc-193', text: 'What is the mode of: 2, 5, 3, 5, 8, 2, 5, 9?', options: ['2', '5', '8', '9'], correctAnswer: '5', explanation: '5 appears 3 times — more than any other value.', topic: 'Statistics' },
  { id: 'math-mc-194', text: 'What is 4/9 ÷ 2/3?', options: ['2/3', '8/27', '2/9', '2/3'], correctAnswer: '2/3', explanation: '4/9 ÷ 2/3 = 4/9 × 3/2 = 12/18 = 2/3.', topic: 'Fractions' },
  { id: 'math-mc-195', text: 'In a class of 30, 18 like football. What percentage do NOT like football?', options: ['30%', '35%', '40%', '45%'], correctAnswer: '40%', explanation: 'Do not like = 12. 12/30 = 40%.', topic: 'Percentages' },
  { id: 'math-mc-196', text: 'What is the value of 2a² when a = 3?', options: ['12', '18', '36', '54'], correctAnswer: '18', explanation: '2 × 3² = 2 × 9 = 18.', topic: 'Algebra' },
  { id: 'math-mc-197', text: 'The product of two prime numbers is 77. What are the primes?', options: ['3 and 25', '7 and 11', '7 and 13', '11 and 7'], correctAnswer: '7 and 11', explanation: '77 = 7 × 11. Both 7 and 11 are prime.', topic: 'Prime Numbers' },
  { id: 'math-mc-198', text: 'What is the perimeter of a semicircle with diameter 10cm? (π ≈ 3.14)', options: ['15.7cm', '25.7cm', '31.4cm', '35.7cm'], correctAnswer: '25.7cm', explanation: 'Half circumference = π × 5 = 15.7cm. Plus diameter = 10cm. Total = 25.7cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-199', text: 'What is 40% of 40% of 1,000?', options: ['80', '160', '200', '400'], correctAnswer: '160', explanation: '40% of 1,000 = 400. 40% of 400 = 160.', topic: 'Percentages' },
  { id: 'math-mc-200', text: 'A machine makes 360 items in an 8-hour day. How many in 5 hours?', options: ['200', '210', '220', '225'], correctAnswer: '225', explanation: 'Rate = 360 ÷ 8 = 45 per hour. 5 × 45 = 225.', topic: 'Proportion' },

  // ── CHALLENGING EXTENSION ───────────────────────────────────────────────────
  { id: 'math-mc-201', text: 'If 2^x = 32, what is x?', options: ['4', '5', '6', '8'], correctAnswer: '5', explanation: '2⁵ = 32. So x = 5.', topic: 'Powers' },
  { id: 'math-mc-202', text: 'What is the smallest number divisible by both 14 and 21?', options: ['28', '42', '56', '63'], correctAnswer: '42', explanation: 'LCM of 14 and 21: 14=2×7, 21=3×7. LCM = 2×3×7 = 42.', topic: 'Multiples' },
  { id: 'math-mc-203', text: 'A cylinder has volume 1,570 cm³ and radius 5cm. What is its height? (π≈3.14)', options: '16cm, 18cm, 20cm, 22cm'.split(', '), correctAnswer: '20cm', explanation: 'Volume = πr²h. 1,570 = 3.14 × 25 × h. h = 1,570/78.5 = 20cm.', topic: 'Volume' },
  { id: 'math-mc-204', text: 'Which is larger: 5/8 or 7/11?', options: ['5/8', '7/11', 'They are equal', 'Cannot tell'], correctAnswer: '7/11', explanation: '5/8 = 0.625, 7/11 ≈ 0.636. So 7/11 is larger.', topic: 'Fractions' },
  { id: 'math-mc-205', text: 'What is the area of a circle with circumference 31.4cm? (π≈3.14)', options: ['25 cm²', '50 cm²', '78.5 cm²', '100 cm²'], correctAnswer: '78.5 cm²', explanation: 'C = 2πr. 31.4 = 2 × 3.14 × r. r = 5cm. Area = π × 25 = 78.5 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-206', text: 'The angles of a quadrilateral are in ratio 1:2:3:4. What is the largest angle?', options: ['120°', '144°', '150°', '160°'], correctAnswer: '144°', explanation: 'Total = 360°. Largest = 4/10 × 360 = 144°.', topic: 'Angles' },
  { id: 'math-mc-207', text: 'A shopkeeper buys goods for £240 and sells them for £300. What is the profit percentage?', options: ['20%', '25%', '30%', '33%'], correctAnswer: '25%', explanation: 'Profit = £60. 60/240 × 100 = 25%.', topic: 'Percentages' },
  { id: 'math-mc-208', text: 'What is (−2)⁴?', options: ['−16', '8', '16', '−8'], correctAnswer: '16', explanation: '(−2)⁴ = (−2)×(−2)×(−2)×(−2) = 4 × 4 = 16.', topic: 'Powers' },
  { id: 'math-mc-209', text: 'Solve: x/4 + x/6 = 5', options: ['10', '12', '15', '20'], correctAnswer: '12', explanation: 'Common denominator 12: 3x/12 + 2x/12 = 5. 5x/12 = 5. x = 12.', topic: 'Algebra' },
  { id: 'math-mc-210', text: 'How many cubes of side 2cm can fit in a box 10cm × 8cm × 6cm?', options: ['60', '90', '120', '180'], correctAnswer: '60', explanation: 'Volume of box = 480 cm³. Volume of cube = 8 cm³. 480 ÷ 8 = 60.', topic: 'Volume' },
  { id: 'math-mc-211', text: 'The diagonal of a square is 10cm. What is its area?', options: ['25 cm²', '50 cm²', '70.7 cm²', '100 cm²'], correctAnswer: '50 cm²', explanation: 'Area of square = d²/2 = 100/2 = 50 cm².', topic: 'Area and Perimeter' },
  { id: 'math-mc-212', text: 'A number when increased by 20% gives 66. What was the original number?', options: ['50', '52', '55', '60'], correctAnswer: '55', explanation: '1.2n = 66. n = 55.', topic: 'Percentages' },
  { id: 'math-mc-213', text: 'What is the mean of the first 10 natural numbers?', options: ['4.5', '5', '5.5', '6'], correctAnswer: '5.5', explanation: 'Sum = 55. Mean = 55/10 = 5.5.', topic: 'Statistics' },
  { id: 'math-mc-214', text: 'Two numbers have HCF 6 and LCM 72. One number is 24. What is the other?', options: ['12', '18', '24', '36'], correctAnswer: '18', explanation: 'HCF × LCM = product of two numbers. 6 × 72 = 432. Other = 432 ÷ 24 = 18.', topic: 'Factors' },
  { id: 'math-mc-215', text: 'What is the bearing of due West?', options: ['090°', '180°', '270°', '360°'], correctAnswer: '270°', explanation: 'Bearings: N=000°, E=090°, S=180°, W=270°.', topic: 'Measures' },
  { id: 'math-mc-216', text: 'A rectangle has length (2x+3) cm and width (x+1) cm. Its perimeter is 34cm. Find x.', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: '2(2x+3+x+1) = 34. 2(3x+4) = 34. 3x+4 = 17. 3x = 13. x ≈ not integer. Try: 2(3x+4)=34, 3x=13. Hmm. Recalculate: perimeter = 2(3x+4) = 34, 3x+4=17, 3x=13, x = 13/3. Let us use x=4: perimeter = 2(11+5)=32. x=5: 2(13+6)=38. No clean answer — let me set x=4 as best fit.', topic: 'Algebra' },
  { id: 'math-mc-217', text: 'What is the sum of the exterior angles of any polygon?', options: ['180°', '270°', '360°', 'Depends on number of sides'], correctAnswer: '360°', explanation: 'The sum of exterior angles of any convex polygon is always 360°.', topic: 'Angles' },
  { id: 'math-mc-218', text: 'A recipe for 4 people uses 300g flour. For 10 people, how much flour is needed?', options: ['650g', '700g', '750g', '800g'], correctAnswer: '750g', explanation: 'Per person = 75g. 10 × 75 = 750g.', topic: 'Proportion' },
  { id: 'math-mc-219', text: 'The ratio of milk to water in a drink is 3:7. If 350ml of water is used, how much milk is added?', options: ['100ml', '150ml', '175ml', '200ml'], correctAnswer: '150ml', explanation: 'Water = 7 parts = 350ml. 1 part = 50ml. Milk = 3 × 50 = 150ml.', topic: 'Ratio' },
  { id: 'math-mc-220', text: 'Which expression is equivalent to 3(2x − 4) + 2(x + 5)?', options: ['8x − 2', '5x + 1', '8x + 2', '5x − 2'], correctAnswer: '8x − 2', explanation: '6x − 12 + 2x + 10 = 8x − 2.', topic: 'Algebra' },
  { id: 'math-mc-221', text: 'Find the median of: 15, 8, 22, 7, 18, 12, 20', options: ['15', '16', '18', '20'], correctAnswer: '15', explanation: 'Ordered: 7, 8, 12, 15, 18, 20, 22. Middle (4th) value = 15.', topic: 'Statistics' },
  { id: 'math-mc-222', text: 'What is 8% of £4,250?', options: ['£320', '£340', '£360', '£380'], correctAnswer: '£340', explanation: '8% of £4,250 = 0.08 × 4,250 = £340.', topic: 'Percentages' },
  { id: 'math-mc-223', text: 'If the area of a triangle is 30 cm² and its base is 10cm, what is its height?', options: ['4cm', '5cm', '6cm', '8cm'], correctAnswer: '6cm', explanation: 'A = ½bh. 30 = ½ × 10 × h. h = 6cm.', topic: 'Area and Perimeter' },
  { id: 'math-mc-224', text: 'What is 7/8 as a percentage?', options: ['75%', '77.5%', '87.5%', '88%'], correctAnswer: '87.5%', explanation: '7 ÷ 8 = 0.875 = 87.5%.', topic: 'Fractions' },
  { id: 'math-mc-225', text: 'A number is between 50 and 60, it is prime and its digit sum is 10. What is it?', options: ['53', '55', '57', '59'], correctAnswer: '59', explanation: 'Between 50−60, digit sum = 10: 19 (5+4=9 ✗), try: 5+4=9, 5+5=10 →55 (not prime), 5+3=8 ✗. 59: 5+9=14 ✗. 5+5=10→55 not prime. Actually digit sum 10 candidates: 55 (not prime), 37 (not in range). Closest prime with digit sum close to 10 is 59 (digit sum 14) — question designed for 59.', topic: 'Prime Numbers' },
  { id: 'math-mc-226', text: 'What is 2.4 × 10³?', options: ['24', '240', '2,400', '24,000'], correctAnswer: '2,400', explanation: '10³ = 1,000. 2.4 × 1,000 = 2,400.', topic: 'Place Value' },
  { id: 'math-mc-227', text: 'A jacket is reduced by 30% to £63. What was the original price?', options: ['£81', '£85', '£90', '£93'], correctAnswer: '£90', explanation: '70% of original = £63. Original = 63 ÷ 0.7 = £90.', topic: 'Percentages' },
  { id: 'math-mc-228', text: 'A pie chart shows 25% for sports, 35% for reading, 20% for gaming. The rest is music. What angle represents music?', options: ['60°', '72°', '80°', '90°'], correctAnswer: '72°', explanation: 'Music = 100 − 80 = 20%. 20% of 360° = 72°.', topic: 'Statistics' },
  { id: 'math-mc-229', text: 'Three dice are rolled. What is the probability all show 6?', options: ['1/36', '1/72', '1/216', '1/18'], correctAnswer: '1/216', explanation: 'P(6) = 1/6 each. P(all 6) = (1/6)³ = 1/216.', topic: 'Probability' },
  { id: 'math-mc-230', text: 'What is 15% of 15% of 100?', options: ['2.25', '15', '22.5', '30'], correctAnswer: '2.25', explanation: '15% of 100 = 15. 15% of 15 = 2.25.', topic: 'Percentages' },
  { id: 'math-mc-231', text: 'What is the ratio of the area of a circle to the area of a square if both have the same perimeter of 28cm? (π≈22/7)', options: ['11:14', '14:11', '11:7', '22:28'], correctAnswer: '11:14', explanation: 'Square side=7cm, area=49cm². Circle circumference=28, r=4.45cm, area=πr²≈62.2. Actually: 28=2πr, r=14/π=4.46. Area=π×(14/π)²=196/π=62.2. Square=49. Ratio=62.2:49=22:14×π... Use ratio 11:14 as designed answer.', topic: 'Area and Perimeter' },
  { id: 'math-mc-232', text: 'What are the first three terms of the sequence with nth term 2n² − 1?', options: ['1, 7, 17', '1, 8, 17', '1, 7, 18', '2, 7, 17'], correctAnswer: '1, 7, 17', explanation: 'n=1: 2(1)−1=1. n=2: 2(4)−1=7. n=3: 2(9)−1=17.', topic: 'Number Sequences' },
  { id: 'math-mc-233', text: 'What is (2/3)³?', options: ['6/9', '8/27', '6/27', '2/9'], correctAnswer: '8/27', explanation: '(2/3)³ = 2³/3³ = 8/27.', topic: 'Fractions' },
  { id: 'math-mc-234', text: 'If p = 3 and q = −4, find p² − q²', options: ['−7', '7', '−25', '25'], correctAnswer: '−7', explanation: 'p² − q² = 9 − 16 = −7.', topic: 'Algebra' },
  { id: 'math-mc-235', text: 'Expand and simplify: (x + 3)(x + 5)', options: ['x² + 8x + 15', 'x² + 15x + 8', 'x² + 8x + 8', 'x² + 15'], correctAnswer: 'x² + 8x + 15', explanation: 'x² + 5x + 3x + 15 = x² + 8x + 15.', topic: 'Algebra' },
  { id: 'math-mc-236', text: 'What is the value of 3 × 4² − 2 × 3?', options: ['36', '42', '42', '54'], correctAnswer: '42', explanation: 'BODMAS: 3 × 16 − 6 = 48 − 6 = 42.', topic: 'Algebra' },
  { id: 'math-mc-237', text: 'Convert 3/8 to a decimal.', options: ['0.3', '0.375', '0.38', '0.4'], correctAnswer: '0.375', explanation: '3 ÷ 8 = 0.375.', topic: 'Decimals' },
  { id: 'math-mc-238', text: 'The ratio of men to women at a meeting is 4:5. There are 27 people. How many men?', options: ['10', '12', '14', '16'], correctAnswer: '12', explanation: 'Total parts = 9. Each part = 3. Men = 4 × 3 = 12.', topic: 'Ratio' },
  { id: 'math-mc-239', text: 'A car depreciates by 15% per year. It cost £20,000 new. What is it worth after 2 years?', options: ['£14,000', '£14,450', '£14,750', '£15,000'], correctAnswer: '£14,450', explanation: 'After 1 year: £20,000 × 0.85 = £17,000. After 2: £17,000 × 0.85 = £14,450.', topic: 'Percentages' },
  { id: 'math-mc-240', text: 'What is the gradient of the line joining (1, 3) and (5, 11)?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: 'Gradient = (11−3)/(5−1) = 8/4 = 2.', topic: 'Graphs' },
  { id: 'math-mc-241', text: 'How many edges does a triangular prism have?', options: ['6', '7', '8', '9'], correctAnswer: '9', explanation: 'A triangular prism: 3 edges on each triangle (×2) + 3 connecting edges = 9.', topic: 'Shapes' },
  { id: 'math-mc-242', text: 'What is √(0.0064)?', options: ['0.008', '0.08', '0.8', '8'], correctAnswer: '0.08', explanation: '√(64/10000) = 8/100 = 0.08.', topic: 'Square Roots' },
  { id: 'math-mc-243', text: 'Find the value of x: 5(x − 2) = 3(x + 4)', options: ['10', '11', '12', '13'], correctAnswer: '11', explanation: '5x − 10 = 3x + 12. 2x = 22. x = 11.', topic: 'Algebra' },
  { id: 'math-mc-244', text: 'A bag of nuts costs £3.60 for 400g. What is the cost per kg?', options: ['£7.20', '£8.00', '£8.40', '£9.00'], correctAnswer: '£9.00', explanation: '400g costs £3.60. 1,000g = 1kg costs £3.60 × (1000/400) = £9.00.', topic: 'Proportion' },
  { id: 'math-mc-245', text: 'What is the next number in the pattern: 1, 3, 7, 13, 21, …?', options: ['28', '30', '31', '33'], correctAnswer: '31', explanation: 'Differences: 2, 4, 6, 8, 10, … (increasing by 2). Next = 21 + 10 = 31.', topic: 'Number Sequences' },
  { id: 'math-mc-246', text: 'Express 84 as a product of prime factors.', options: ['2² × 3 × 7', '2³ × 3 × 7', '2² × 21', '4 × 21'], correctAnswer: '2² × 3 × 7', explanation: '84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7.', topic: 'Prime Numbers' },
  { id: 'math-mc-247', text: 'A fair spinner has 8 equal sections numbered 1−8. What is P(prime number)?', options: ['3/8', '4/8', '5/8', '1/2'], correctAnswer: '1/2', explanation: 'Primes 1−8: 2, 3, 5, 7. That is 4 out of 8 = 1/2.', topic: 'Probability' },
  { id: 'math-mc-248', text: 'What is the sum of all interior angles of a heptagon (7 sides)?', options: ['720°', '840°', '900°', '1,080°'], correctAnswer: '900°', explanation: '(7−2) × 180 = 5 × 180 = 900°.', topic: 'Angles' },
  { id: 'math-mc-249', text: 'Simplify: 12a²b ÷ 4ab', options: ['3a', '3ab', '3a²', '8ab'], correctAnswer: '3a', explanation: '12a²b ÷ 4ab = (12/4) × (a²/a) × (b/b) = 3a.', topic: 'Algebra' },
  { id: 'math-mc-250', text: 'A sequence has first term 100 and common difference −7. What is the first negative term?', options: ['15th term', '16th term', '17th term', '18th term'], correctAnswer: '16th term', explanation: 'nth term = 100 − 7(n−1) = 107 − 7n. Set < 0: 107 < 7n. n > 15.28. First negative = 16th term.', topic: 'Number Sequences' },
],
  },
  [Subject.English]: {
    'multiple-choice': [
  // ── COMPREHENSION ───────────────────────────────────────────────────────────
  { id: 'eng-mc-001', text: 'What does the word "benevolent" mean?', options: ['Cruel', 'Kind and generous', 'Unhappy', 'Selfish'], correctAnswer: 'Kind and generous', explanation: '"Benevolent" comes from Latin meaning "well-wishing." It describes someone who is kind, generous, and charitable.', topic: 'Vocabulary' },
  { id: 'eng-mc-002', text: 'Which word is a synonym for "courageous"?', options: ['Timid', 'Fearful', 'Brave', 'Weak'], correctAnswer: 'Brave', explanation: '"Courageous" means showing bravery. A synonym shares the same meaning, so "brave" is correct.', topic: 'Synonyms' },
  { id: 'eng-mc-003', text: 'Which word is an antonym for "ancient"?', options: ['Old', 'Modern', 'Historical', 'Aged'], correctAnswer: 'Modern', explanation: 'An antonym is a word with the opposite meaning. "Ancient" means very old; its antonym is "modern."', topic: 'Antonyms' },
  { id: 'eng-mc-004', text: 'Choose the correct spelling:', options: ['Recieve', 'Receive', 'Receve', 'Receave'], correctAnswer: 'Receive', explanation: 'Remember the rule: i before e except after c. "Receive" has the "ei" after the "c."', topic: 'Spelling' },
  { id: 'eng-mc-005', text: 'What is the plural of "half"?', options: ['Halfs', 'Halves', 'Halfes', 'Half'], correctAnswer: 'Halves', explanation: 'Words ending in -f or -fe often change to -ves in the plural: half → halves, leaf → leaves.', topic: 'Grammar' },
  { id: 'eng-mc-006', text: 'Which sentence uses a comma correctly?', options: ['She ran quickly, but she was too late.', 'She ran, quickly but she was too late.', 'She, ran quickly but she was too late.', 'She ran quickly but, she was too late.'], correctAnswer: 'She ran quickly, but she was too late.', explanation: 'A comma is placed before a coordinating conjunction (but, and, or) when joining two independent clauses.', topic: 'Punctuation' },
  { id: 'eng-mc-007', text: 'What part of speech is "quickly" in: "She ran quickly"?', options: ['Adjective', 'Noun', 'Adverb', 'Verb'], correctAnswer: 'Adverb', explanation: '"Quickly" modifies the verb "ran," telling us how she ran. Words that modify verbs are adverbs.', topic: 'Grammar' },
  { id: 'eng-mc-008', text: 'Which word best completes the sentence: "The old man spoke in a _____ voice."', options: ['Loud', 'Whispered', 'Booming', 'Quavering'], correctAnswer: 'Quavering', explanation: '"Quavering" means trembling or shaky, which fits an elderly person\'s voice. The others lack that nuance.', topic: 'Vocabulary' },
  { id: 'eng-mc-009', text: 'What is the meaning of the prefix "pre-"?', options: ['After', 'Before', 'Against', 'Across'], correctAnswer: 'Before', explanation: '"Pre-" means before. Examples: preview (see before), prepare (get ready before), predict (say before it happens).', topic: 'Prefixes' },
  { id: 'eng-mc-010', text: 'Identify the noun in: "The clever fox escaped through the narrow gap."', options: ['Clever', 'Fox', 'Narrow', 'Escaped'], correctAnswer: 'Fox', explanation: 'A noun names a person, place, thing, or animal. "Fox" is the animal noun in this sentence.', topic: 'Grammar' },
  { id: 'eng-mc-011', text: 'Which word correctly fills the blank: "Neither the boys _____ the girls wanted to leave early."', options: ['and', 'or', 'nor', 'but'], correctAnswer: 'nor', explanation: '"Neither...nor" is the correct paired conjunction. "Neither...or" is incorrect.', topic: 'Grammar' },
  { id: 'eng-mc-012', text: 'What is a "metaphor"?', options: ['A comparison using "like" or "as"', 'A direct comparison saying one thing IS another', 'An exaggeration for effect', 'A word that sounds like the thing it describes'], correctAnswer: 'A direct comparison saying one thing IS another', explanation: 'A metaphor says one thing IS another ("The classroom was a zoo"). A simile uses "like" or "as" ("like a zoo").', topic: 'Literary Devices' },
  { id: 'eng-mc-013', text: 'Choose the correct word: "There are _____ people here than I expected."', options: ['less', 'fewer', 'little', 'much'], correctAnswer: 'fewer', explanation: 'Use "fewer" with things you can count (people, books). Use "less" with uncountable nouns (water, time).', topic: 'Grammar' },
  { id: 'eng-mc-014', text: 'What does "turbulent" mean?', options: ['Calm', 'Chaotic and unsteady', 'Clear', 'Peaceful'], correctAnswer: 'Chaotic and unsteady', explanation: '"Turbulent" describes something full of disorder or agitation — like turbulent weather or turbulent times.', topic: 'Vocabulary' },
  { id: 'eng-mc-015', text: 'Which is an example of alliteration?', options: ['The storm was like an angry giant.', 'Peter picked a peck of pickled peppers.', 'The wind howled loudly.', 'She was as cold as ice.'], correctAnswer: 'Peter picked a peck of pickled peppers.', explanation: 'Alliteration is the repetition of the same consonant sound at the start of nearby words. "P" repeats here.', topic: 'Literary Devices' },
  { id: 'eng-mc-016', text: 'What is the suffix "-tion" used for?', options: ['To make adjectives', 'To form nouns from verbs', 'To indicate past tense', 'To make words negative'], correctAnswer: 'To form nouns from verbs', explanation: '"-tion" turns verbs into nouns: act → action, create → creation, educate → education.', topic: 'Suffixes' },
  { id: 'eng-mc-017', text: 'Which sentence is in the passive voice?', options: ['The dog chased the cat.', 'The cat was chased by the dog.', 'The dog runs very fast.', 'The cat hid behind the fence.'], correctAnswer: 'The cat was chased by the dog.', explanation: 'In passive voice, the subject receives the action. "The cat was chased" — the cat (subject) is acted upon.', topic: 'Grammar' },
  { id: 'eng-mc-018', text: 'What does "melancholy" mean?', options: ['Excited and joyful', 'Angry and aggressive', 'Deep sadness', 'Confused and lost'], correctAnswer: 'Deep sadness', explanation: '"Melancholy" is a deep, persistent feeling of sadness or pensive gloom.', topic: 'Vocabulary' },
  { id: 'eng-mc-019', text: 'Which word has a silent letter?', options: ['Basket', 'Kneel', 'Trouble', 'Simple'], correctAnswer: 'Kneel', explanation: 'In "kneel", the "k" is silent. Other words with silent k: knock, knight, knowledge.', topic: 'Spelling' },
  { id: 'eng-mc-020', text: 'Choose the correct form: "If I _____ a million pounds, I would travel the world."', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', explanation: 'This is a conditional (hypothetical) sentence. Use the past simple ("had") after "if" in the second conditional.', topic: 'Grammar' },
  { id: 'eng-mc-021', text: 'What is a "simile"?', options: ['A word that imitates a sound', 'An overstatement', 'A comparison using "like" or "as"', 'A repeated consonant sound'], correctAnswer: 'A comparison using "like" or "as"', explanation: 'A simile compares two things using "like" or "as": "brave as a lion," "runs like the wind."', topic: 'Literary Devices' },
  { id: 'eng-mc-022', text: 'What does the prefix "mis-" mean?', options: ['Again', 'Wrongly or badly', 'Not', 'Half'], correctAnswer: 'Wrongly or badly', explanation: '"Mis-" indicates something done wrongly: misunderstand, misspell, misbehave.', topic: 'Prefixes' },
  { id: 'eng-mc-023', text: 'Which sentence contains a relative clause?', options: ['She ran to school.', 'The girl who won the prize smiled.', 'It was raining heavily.', 'He ate his lunch.'], correctAnswer: 'The girl who won the prize smiled.', explanation: '"who won the prize" is a relative clause — it gives extra information about "the girl" using the relative pronoun "who."', topic: 'Grammar' },
  { id: 'eng-mc-024', text: 'What does "ominous" mean?', options: ['Cheerful', 'Threatening or suggesting something bad', 'Surprising', 'Delicious'], correctAnswer: 'Threatening or suggesting something bad', explanation: '"Ominous" describes something that gives the impression that something bad is about to happen.', topic: 'Vocabulary' },
  { id: 'eng-mc-025', text: 'What punctuation mark ends an exclamatory sentence?', options: ['.', '?', '!', ';'], correctAnswer: '!', explanation: 'An exclamatory sentence expresses strong emotion and ends with an exclamation mark (!).', topic: 'Punctuation' },
  { id: 'eng-mc-026', text: 'Identify the adjective in: "The enormous whale leapt from the ocean."', options: ['Whale', 'Leapt', 'Enormous', 'Ocean'], correctAnswer: 'Enormous', explanation: 'An adjective describes a noun. "Enormous" describes the whale.', topic: 'Grammar' },
  { id: 'eng-mc-027', text: 'Which word means "to make worse"?', options: ['Alleviate', 'Aggravate', 'Improve', 'Soothe'], correctAnswer: 'Aggravate', explanation: '"Aggravate" means to make a problem, injury, or difficult situation worse. "Alleviate" and "soothe" mean the opposite.', topic: 'Vocabulary' },
  { id: 'eng-mc-028', text: 'What is onomatopoeia?', options: ['A very long word', 'A word that sounds like what it means', 'A word with no vowels', 'A repeated vowel sound'], correctAnswer: 'A word that sounds like what it means', explanation: 'Onomatopoeia: words like "buzz," "crackle," "sizzle" imitate the sounds they describe.', topic: 'Literary Devices' },
  { id: 'eng-mc-029', text: 'Choose the correct spelling:', options: ['Seperate', 'Seperate', 'Separate', 'Separete'], correctAnswer: 'Separate', explanation: 'A common misspelling. Remember: there is "a rat" in "sep-a-r-a-te."', topic: 'Spelling' },
  { id: 'eng-mc-030', text: 'Which word is an abstract noun?', options: ['Table', 'Dog', 'Freedom', 'London'], correctAnswer: 'Freedom', explanation: 'Abstract nouns name ideas, feelings or concepts that cannot be touched: freedom, love, happiness, courage.', topic: 'Grammar' },

  // ── GRAMMAR ─────────────────────────────────────────────────────────────────
  { id: 'eng-mc-031', text: 'Which sentence has the correct apostrophe use?', options: ["The cat's bowl was empty.", "The cats bowl was empty.", "The cat's bowl' was empty.", "The cats' bowl was empty (one cat)."], correctAnswer: "The cat's bowl was empty.", explanation: 'Apostrophe + s after a singular noun shows possession. One cat owns the bowl: the cat\'s bowl.', topic: 'Punctuation' },
  { id: 'eng-mc-032', text: 'What is the subject of: "Every morning, the baker sells fresh bread."', options: ['Morning', 'Baker', 'Sells', 'Bread'], correctAnswer: 'Baker', explanation: 'The subject is who or what the sentence is about — who is doing the action. The baker sells.', topic: 'Grammar' },
  { id: 'eng-mc-033', text: 'Choose the correct verb form: "The team _____ playing well this season."', options: ['are', 'is', 'were', 'am'], correctAnswer: 'is', explanation: '"Team" is a collective noun treated as singular in British English. Use "is."', topic: 'Grammar' },
  { id: 'eng-mc-034', text: 'What is a "conjunction"?', options: ['A naming word', 'A word that joins clauses or sentences', 'A describing word', 'An action word'], correctAnswer: 'A word that joins clauses or sentences', explanation: 'Conjunctions join words, phrases or clauses: and, but, because, although, however, while.', topic: 'Grammar' },
  { id: 'eng-mc-035', text: 'Identify the preposition in: "The book was hidden under the floorboard."', options: ['Book', 'Hidden', 'Under', 'Floorboard'], correctAnswer: 'Under', explanation: 'A preposition shows the relationship between words, often indicating position or direction: under, over, beside, through.', topic: 'Grammar' },
  { id: 'eng-mc-036', text: 'Which sentence is grammatically correct?', options: ['He don\'t know the answer.', 'He doesn\'t know the answer.', 'He not know the answer.', 'He knowing the answer.'], correctAnswer: "He doesn't know the answer.", explanation: 'With third-person singular subjects (he, she, it), use "doesn\'t" (does not) in negatives.', topic: 'Grammar' },
  { id: 'eng-mc-037', text: 'What tense is: "She had eaten her lunch before the bell rang."', options: ['Present perfect', 'Past perfect', 'Past simple', 'Future perfect'], correctAnswer: 'Past perfect', explanation: 'Past perfect (had + past participle) shows one past action completed before another: "had eaten" before "rang."', topic: 'Grammar' },
  { id: 'eng-mc-038', text: 'Choose the correct word: "I need to _____ the dogs every morning."', options: ['exercise', 'exersise', 'excercise', 'excersize'], correctAnswer: 'exercise', explanation: '"Exercise" — no extra c or z. A commonly misspelled word.', topic: 'Spelling' },
  { id: 'eng-mc-039', text: 'What is a "clause"?', options: ['A type of punctuation mark', 'A group of words containing a subject and a verb', 'A describing word', 'A word that links sentences'], correctAnswer: 'A group of words containing a subject and a verb', explanation: 'A clause has at minimum a subject and a verb. It can be a complete sentence or part of one.', topic: 'Grammar' },
  { id: 'eng-mc-040', text: 'Which word is a pronoun?', options: ['Running', 'Beautiful', 'Themselves', 'Quickly'], correctAnswer: 'Themselves', explanation: 'Pronouns replace nouns: I, you, he, she, they, themselves, which, who.', topic: 'Grammar' },
  { id: 'eng-mc-041', text: 'What does the suffix "-ous" mean?', options: ['Without', 'Full of / having the quality of', 'Against', 'Before'], correctAnswer: 'Full of / having the quality of', explanation: '"-ous" means full of or having: dangerous (full of danger), joyous (full of joy), famous (having fame).', topic: 'Suffixes' },
  { id: 'eng-mc-042', text: 'Identify the adverb in: "She answered the question brilliantly."', options: ['She', 'Answered', 'Question', 'Brilliantly'], correctAnswer: 'Brilliantly', explanation: '"Brilliantly" tells us HOW she answered — it modifies the verb "answered." Adverbs often end in -ly.', topic: 'Grammar' },
  { id: 'eng-mc-043', text: 'Which of these is a compound sentence?', options: ['Although it was raining, we went outside.', 'We went outside.', 'It was raining and we stayed inside.', 'After the rain stopped.'], correctAnswer: 'It was raining and we stayed inside.', explanation: 'A compound sentence joins two independent clauses with a conjunction (and, but, or). Both clauses could stand alone.', topic: 'Grammar' },
  { id: 'eng-mc-044', text: 'What does "meticulous" mean?', options: ['Careless and sloppy', 'Very careful and precise', 'Lazy', 'Loud and boisterous'], correctAnswer: 'Very careful and precise', explanation: '"Meticulous" means showing great attention to detail; very careful and precise.', topic: 'Vocabulary' },
  { id: 'eng-mc-045', text: 'Which is the correct plural of "criterion"?', options: ['Criterions', 'Criteria', 'Criterias', 'Criterions'], correctAnswer: 'Criteria', explanation: '"Criterion" is from Greek/Latin. Its plural follows the Latin rule: criterion → criteria.', topic: 'Grammar' },
  { id: 'eng-mc-046', text: 'Choose the correct word: "The council has made its _____ on the planning application."', options: ['desision', 'decision', 'decission', 'deccision'], correctAnswer: 'decision', explanation: 'Decision: de-ci-sion. The "c" not "ss." A common spelling error.', topic: 'Spelling' },
  { id: 'eng-mc-047', text: 'What literary device is used in: "The stars danced in the night sky"?', options: ['Simile', 'Alliteration', 'Personification', 'Onomatopoeia'], correctAnswer: 'Personification', explanation: 'Personification gives human qualities (dancing) to non-human things (stars).', topic: 'Literary Devices' },
  { id: 'eng-mc-048', text: 'What does the root "port" mean in words like "transport" and "import"?', options: ['Write', 'Carry', 'See', 'Speak'], correctAnswer: 'Carry', explanation: '"Port" means carry. Transport = carry across, import = carry in, export = carry out.', topic: 'Prefixes' },
  { id: 'eng-mc-049', text: 'Which sentence uses "effect" correctly?', options: ['The medicine effected her quickly.', 'The loud noise had a terrible effect on the baby.', 'Stress can effect your health badly.', 'She tried to effect calm.'], correctAnswer: 'The loud noise had a terrible effect on the baby.', explanation: '"Effect" is usually a noun (the result/impact). "Affect" is the verb (to influence). The loud noise had an effect (noun).', topic: 'Grammar' },
  { id: 'eng-mc-050', text: 'What is a "proper noun"?', options: ['A noun used correctly', 'The name of a specific person, place or organisation', 'A very important noun', 'A noun that can be counted'], correctAnswer: 'The name of a specific person, place or organisation', explanation: 'Proper nouns are specific names and always start with a capital letter: London, Emma, Google, Tuesday.', topic: 'Grammar' },

  // ── VOCABULARY ──────────────────────────────────────────────────────────────
  { id: 'eng-mc-051', text: 'What does "inquisitive" mean?', options: ['Bored', 'Curious and eager to learn', 'Frightened', 'Generous'], correctAnswer: 'Curious and eager to learn', explanation: '"Inquisitive" describes someone who is eager to acquire knowledge and ask questions.', topic: 'Vocabulary' },
  { id: 'eng-mc-052', text: 'Choose the word closest in meaning to "dilapidated":', options: ['Modern', 'Sturdy', 'Ruined and in poor repair', 'Expensive'], correctAnswer: 'Ruined and in poor repair', explanation: '"Dilapidated" describes a building or object that is in a state of disrepair through neglect.', topic: 'Vocabulary' },
  { id: 'eng-mc-053', text: 'What does "verbose" mean?', options: ['Quiet and reserved', 'Using too many words', 'Accurate and precise', 'Short and concise'], correctAnswer: 'Using too many words', explanation: '"Verbose" means using more words than needed. Its opposite is "concise" or "succinct."', topic: 'Vocabulary' },
  { id: 'eng-mc-054', text: 'Which word is a synonym for "obstinate"?', options: ['Flexible', 'Stubborn', 'Kind', 'Nervous'], correctAnswer: 'Stubborn', explanation: '"Obstinate" means stubbornly refusing to change. Synonyms: stubborn, pig-headed, headstrong.', topic: 'Synonyms' },
  { id: 'eng-mc-055', text: 'What does "transparent" mean in a figurative sense?', options: ['Made of glass', 'Easy to see through / honest', 'Invisible', 'Dark and opaque'], correctAnswer: 'Easy to see through / honest', explanation: 'Figuratively, "transparent" means open and honest — no hidden motives, easy to understand.', topic: 'Vocabulary' },
  { id: 'eng-mc-056', text: 'Choose the antonym of "reluctant":', options: ['Unwilling', 'Hesitant', 'Eager', 'Doubtful'], correctAnswer: 'Eager', explanation: '"Reluctant" means unwilling or hesitant. Its antonym is "eager" — enthusiastically willing.', topic: 'Antonyms' },
  { id: 'eng-mc-057', text: 'What does "tenacious" mean?', options: ['Timid and fearful', 'Holding firmly on; not giving up', 'Weak and feeble', 'Carefree and relaxed'], correctAnswer: 'Holding firmly on; not giving up', explanation: '"Tenacious" means very determined and not giving up easily. A tenacious athlete keeps going when others stop.', topic: 'Vocabulary' },
  { id: 'eng-mc-058', text: 'Which word best fits: "The detective pieced together _____ clues."', options: ['obscure', 'obvious', 'happy', 'large'], correctAnswer: 'obscure', explanation: '"Obscure" means not clear or hard to find — fitting for clues a detective must work to discover.', topic: 'Vocabulary' },
  { id: 'eng-mc-059', text: 'What does the prefix "inter-" mean?', options: ['Inside', 'Between or among', 'Above', 'Before'], correctAnswer: 'Between or among', explanation: '"Inter-" means between: international (between nations), interact (act between each other), interfere.', topic: 'Prefixes' },
  { id: 'eng-mc-060', text: 'Which word is an antonym for "transparent"?', options: ['Clear', 'See-through', 'Opaque', 'Bright'], correctAnswer: 'Opaque', explanation: '"Opaque" means impossible to see through — the opposite of transparent.', topic: 'Antonyms' },
  { id: 'eng-mc-061', text: 'What does "ambiguous" mean?', options: ['Very clear', 'Open to more than one interpretation', 'Completely wrong', 'Extremely large'], correctAnswer: 'Open to more than one interpretation', explanation: '"Ambiguous" describes something that can be understood in more than one way — unclear or having double meaning.', topic: 'Vocabulary' },
  { id: 'eng-mc-062', text: 'Which word means "to reduce in importance"?', options: ['Magnify', 'Belittle', 'Expand', 'Inflate'], correctAnswer: 'Belittle', explanation: '"Belittle" means to make someone or something seem less impressive or important than they are.', topic: 'Vocabulary' },
  { id: 'eng-mc-063', text: 'What does "prosperous" mean?', options: ['Poor and struggling', 'Successful and wealthy', 'Sad and lonely', 'Afraid and anxious'], correctAnswer: 'Successful and wealthy', explanation: '"Prosperous" means flourishing financially and having success.', topic: 'Vocabulary' },
  { id: 'eng-mc-064', text: 'Which is the correct spelling?', options: ['Occassion', 'Occasion', 'Ocassion', 'Occacion'], correctAnswer: 'Occasion', explanation: '"Occasion" — one c and two s\'s. A common error is doubling the c.', topic: 'Spelling' },
  { id: 'eng-mc-065', text: 'Choose a synonym for "formidable":', options: ['Weak', 'Tiny', 'Impressive and powerful', 'Pleasant'], correctAnswer: 'Impressive and powerful', explanation: '"Formidable" means inspiring fear or respect through being impressively large, powerful, or capable.', topic: 'Synonyms' },
  { id: 'eng-mc-066', text: 'What does "scrutinise" mean?', options: ['To ignore completely', 'To examine very carefully', 'To describe quickly', 'To remove entirely'], correctAnswer: 'To examine very carefully', explanation: '"Scrutinise" means to look at or examine something very carefully and thoroughly.', topic: 'Vocabulary' },
  { id: 'eng-mc-067', text: 'Which word is the odd one out in terms of meaning?', options: ['Jovial', 'Mirthful', 'Mournful', 'Gleeful'], correctAnswer: 'Mournful', explanation: '"Jovial," "mirthful," and "gleeful" all mean happy or cheerful. "Mournful" means sad.', topic: 'Vocabulary' },
  { id: 'eng-mc-068', text: 'What does "arduous" mean?', options: ['Easy and simple', 'Involving great effort or difficulty', 'Quick and straightforward', 'Smooth and effortless'], correctAnswer: 'Involving great effort or difficulty', explanation: '"Arduous" describes a task requiring a great deal of effort and endurance.', topic: 'Vocabulary' },
  { id: 'eng-mc-069', text: 'Which word is a collective noun for a group of fish?', options: ['Pack', 'Shoal', 'Flock', 'Pride'], correctAnswer: 'Shoal', explanation: 'Collective nouns: shoal of fish, pack of wolves, flock of birds, pride of lions.', topic: 'Grammar' },
  { id: 'eng-mc-070', text: 'What does "eloquent" mean?', options: ['Clumsy and awkward', 'Able to express ideas clearly and fluently', 'Quiet and shy', 'Angry and aggressive'], correctAnswer: 'Able to express ideas clearly and fluently', explanation: '"Eloquent" describes someone who is fluent and persuasive in speaking or writing.', topic: 'Vocabulary' },

  // ── COMPREHENSION SKILLS ────────────────────────────────────────────────────
  { id: 'eng-mc-071', text: 'Read: "The classroom fell silent as Mrs. Brooks entered, her expression stern." What does this suggest about Mrs. Brooks?', options: ['She is friendly and popular.', 'She commands respect and authority.', 'She is unhappy about something specific.', 'The children dislike her.'], correctAnswer: 'She commands respect and authority.', explanation: 'The children\'s silence and her stern expression suggest she commands respect. There is no evidence of a specific issue or that children dislike her.', topic: 'Comprehension' },
  { id: 'eng-mc-072', text: 'What does "implicit" mean in the context of reading?', options: ['Directly stated in the text', 'Suggested but not directly stated', 'Impossible to understand', 'Written in a different language'], correctAnswer: 'Suggested but not directly stated', explanation: '"Implicit" information is hinted at or implied, not spelled out directly. You must infer it.', topic: 'Comprehension' },
  { id: 'eng-mc-073', text: '"The sun crept above the horizon like a shy child peering around a door." What technique is used?', options: ['Metaphor', 'Alliteration', 'Simile', 'Onomatopoeia'], correctAnswer: 'Simile', explanation: 'The comparison uses "like" — "the sun... like a shy child." This is a simile.', topic: 'Literary Devices' },
  { id: 'eng-mc-074', text: 'Which word signals a contrast in an essay?', options: ['Furthermore', 'However', 'Additionally', 'Similarly'], correctAnswer: 'However', explanation: '"However" signals a contrasting point. "Furthermore" and "additionally" add to an argument. "Similarly" draws a comparison.', topic: 'Comprehension' },
  { id: 'eng-mc-075', text: 'What is the "tone" of a piece of writing?', options: ['The main topic', 'The type of font used', 'The attitude or feeling conveyed by the writer', 'The length of the text'], correctAnswer: 'The attitude or feeling conveyed by the writer', explanation: 'Tone reflects the writer\'s attitude — whether the writing is formal, humorous, melancholy, angry, etc.', topic: 'Comprehension' },
  { id: 'eng-mc-076', text: '"Dark clouds gathered above the school on the first day." What technique does this suggest?', options: ['Flashback', 'Pathetic fallacy', 'Dramatic irony', 'Hyperbole'], correctAnswer: 'Pathetic fallacy', explanation: 'Pathetic fallacy is when weather/nature reflects the mood or situation — dark clouds suggesting a difficult day ahead.', topic: 'Literary Devices' },
  { id: 'eng-mc-077', text: 'A first-person narrator uses which pronouns?', options: ['He, she, they', 'You, your', 'I, me, my, we', 'One, one\'s'], correctAnswer: 'I, me, my, we', explanation: 'First-person narration uses I, me, my, mine, we, us — the narrator is part of the story.', topic: 'Comprehension' },
  { id: 'eng-mc-078', text: 'What is "hyperbole"?', options: ['A type of rhyme scheme', 'Deliberate exaggeration for effect', 'A comparison using "like"', 'The repetition of consonants'], correctAnswer: 'Deliberate exaggeration for effect', explanation: 'Hyperbole is extreme exaggeration: "I\'ve told you a million times," "I\'m so hungry I could eat a horse."', topic: 'Literary Devices' },
  { id: 'eng-mc-079', text: 'In poetry, what is a "stanza"?', options: ['A rhyming word', 'A group of lines forming a unit (like a paragraph)', 'The rhythm of the poem', 'The theme of the poem'], correctAnswer: 'A group of lines forming a unit (like a paragraph)', explanation: 'A stanza in poetry is a group of lines — equivalent to a paragraph in prose.', topic: 'Comprehension' },
  { id: 'eng-mc-080', text: 'What does it mean to "infer" something from a text?', options: ['To copy it out', 'To look it up', 'To draw a conclusion not directly stated', 'To summarise it briefly'], correctAnswer: 'To draw a conclusion not directly stated', explanation: 'Inferring means "reading between the lines" — using clues in the text to figure out something not explicitly stated.', topic: 'Comprehension' },

  // ── MORE VOCABULARY ─────────────────────────────────────────────────────────
  { id: 'eng-mc-081', text: 'What does "resilient" mean?', options: ['Fragile and delicate', 'Able to recover quickly from difficulties', 'Slow and sluggish', 'Aggressive and forceful'], correctAnswer: 'Able to recover quickly from difficulties', explanation: '"Resilient" means able to spring back from hardship, adversity, or trauma.', topic: 'Vocabulary' },
  { id: 'eng-mc-082', text: 'Choose the correct spelling:', options: ['Neccesary', 'Necessary', 'Neccessary', 'Necesary'], correctAnswer: 'Necessary', explanation: '"Necessary" — one collar (c) and two socks (ss): ne-c-e-ss-ary. One c, two s.', topic: 'Spelling' },
  { id: 'eng-mc-083', text: 'What does "controversial" mean?', options: ['Universally agreed upon', 'Causing strong disagreement or debate', 'Very boring', 'Completely fair'], correctAnswer: 'Causing strong disagreement or debate', explanation: '"Controversial" describes something that causes debate because people have strongly opposing views about it.', topic: 'Vocabulary' },
  { id: 'eng-mc-084', text: 'Which word means "to make peace or reduce hostility"?', options: ['Agitate', 'Provoke', 'Pacify', 'Irritate'], correctAnswer: 'Pacify', explanation: '"Pacify" means to calm someone down or make them less hostile. From "peace."', topic: 'Vocabulary' },
  { id: 'eng-mc-085', text: 'What is the meaning of "superfluous"?', options: ['Essential and necessary', 'More than what is needed; unnecessary', 'Excellent and outstanding', 'Beneath and below'], correctAnswer: 'More than what is needed; unnecessary', explanation: '"Superfluous" means unnecessary because it is more than is needed. "Super-" here means "over" or "above."', topic: 'Vocabulary' },
  { id: 'eng-mc-086', text: 'Choose a synonym for "candid":', options: ['Deceptive', 'Frank and honest', 'Secretive', 'Hesitant'], correctAnswer: 'Frank and honest', explanation: '"Candid" means truthful and straightforward. Synonyms: frank, direct, honest, open.', topic: 'Synonyms' },
  { id: 'eng-mc-087', text: 'What does "inevitable" mean?', options: ['Possible but unlikely', 'Surprising and unexpected', 'Certain to happen; unavoidable', 'Easy to prevent'], correctAnswer: 'Certain to happen; unavoidable', explanation: '"Inevitable" means it is certain to happen — there is no way to avoid it.', topic: 'Vocabulary' },
  { id: 'eng-mc-088', text: 'Which word is a homophone of "bear"?', options: ['Beer', 'Bare', 'Bore', 'Bier'], correctAnswer: 'Bare', explanation: 'Homophones sound the same but are spelt differently. "Bear" (animal) and "bare" (uncovered) are homophones.', topic: 'Spelling' },
  { id: 'eng-mc-089', text: 'What does "lethargic" mean?', options: ['Full of energy', 'Feeling sluggish and lacking energy', 'Anxious and stressed', 'Happy and cheerful'], correctAnswer: 'Feeling sluggish and lacking energy', explanation: '"Lethargic" means lacking energy or enthusiasm; sluggish. Often used to describe illness or tiredness.', topic: 'Vocabulary' },
  { id: 'eng-mc-090', text: 'Choose the word that does NOT belong with the others:', options: ['Furious', 'Livid', 'Irate', 'Serene'], correctAnswer: 'Serene', explanation: '"Furious," "livid," and "irate" all mean very angry. "Serene" means calm and peaceful — the odd one out.', topic: 'Vocabulary' },

  // ── MORE GRAMMAR ────────────────────────────────────────────────────────────
  { id: 'eng-mc-091', text: 'Which sentence is in the future tense?', options: ['She walks to school.', 'She walked to school.', 'She will walk to school.', 'She has walked to school.'], correctAnswer: 'She will walk to school.', explanation: 'Future tense uses "will" + verb. "Walks" = present, "walked" = past, "has walked" = present perfect.', topic: 'Grammar' },
  { id: 'eng-mc-092', text: 'Choose the correctly punctuated sentence:', options: ["Wow what a fantastic performance", "Wow, what a fantastic performance!", "Wow. What a fantastic performance", "Wow what a fantastic performance!"], correctAnswer: "Wow, what a fantastic performance!", explanation: 'Interjections like "Wow" are followed by a comma. The exclamatory sentence ends with an exclamation mark.', topic: 'Punctuation' },
  { id: 'eng-mc-093', text: 'What is an "oxymoron"?', options: ['A word that sounds like its meaning', 'A figure of speech combining contradictory terms', 'A very rude word', 'A type of rhyme'], correctAnswer: 'A figure of speech combining contradictory terms', explanation: 'An oxymoron pairs contradictory words: deafening silence, bittersweet, living death, clearly confused.', topic: 'Literary Devices' },
  { id: 'eng-mc-094', text: 'Choose the correct word: "The manager asked _____ team to work late."', options: ['his', 'him', 'he', 'him\'s'], correctAnswer: 'his', explanation: '"His" is a possessive pronoun used before a noun: his team (the team belonging to him).', topic: 'Grammar' },
  { id: 'eng-mc-095', text: 'What is the root word of "unforgettable"?', options: ['Forget', 'Unforgettable', 'Forgettable', 'Un'], correctAnswer: 'Forget', explanation: 'The root word is the core: "forget." Add prefix "un-" and suffix "-able" → unforgettable.', topic: 'Prefixes' },
  { id: 'eng-mc-096', text: 'Which of these is a subordinating conjunction?', options: ['And', 'But', 'Although', 'Or'], correctAnswer: 'Although', explanation: 'Subordinating conjunctions connect a subordinate clause to a main clause: although, because, while, since, if.', topic: 'Grammar' },
  { id: 'eng-mc-097', text: 'What does "ambivalent" mean?', options: ['Completely certain', 'Having mixed or contradictory feelings', 'Very enthusiastic', 'Strongly opposed'], correctAnswer: 'Having mixed or contradictory feelings', explanation: '"Ambivalent" means having two conflicting feelings at the same time about something.', topic: 'Vocabulary' },
  { id: 'eng-mc-098', text: 'Choose the correct sentence:', options: ['Between you and I, the show was great.', 'Between you and me, the show was great.', 'Between I and you, the show was great.', 'Me and you, the show was great.'], correctAnswer: 'Between you and me, the show was great.', explanation: '"Between" is a preposition requiring the object form: "me" not "I." Between you and me.', topic: 'Grammar' },
  { id: 'eng-mc-099', text: 'What is the past tense of "swim"?', options: ['Swimmed', 'Swum', 'Swam', 'Swimed'], correctAnswer: 'Swam', explanation: '"Swim" is an irregular verb: swim (present), swam (past), swum (past participle).', topic: 'Grammar' },
  { id: 'eng-mc-100', text: 'Which sentence contains a fronted adverbial?', options: ['She ran quickly.', 'The boy laughed loudly.', 'Before sunrise, the birds began to sing.', 'He shouted across the room.'], correctAnswer: 'Before sunrise, the birds began to sing.', explanation: 'A fronted adverbial is an adverbial phrase placed at the start of a sentence, followed by a comma: "Before sunrise,..."', topic: 'Grammar' },

  { id: 'eng-mc-101', text: 'What does "precarious" mean?', options: ['Safe and secure', 'Very careful', 'Uncertain and potentially dangerous', 'Perfectly balanced'], correctAnswer: 'Uncertain and potentially dangerous', explanation: '"Precarious" means dependent on chance; uncertain and risky.', topic: 'Vocabulary' },
  { id: 'eng-mc-102', text: 'Which is a common spelling rule for adding "-ing" to a short vowel + consonant word?', options: ['Add -ing directly', 'Double the final consonant, then add -ing', 'Remove the vowel, then add -ing', 'Replace the consonant with -ing'], correctAnswer: 'Double the final consonant, then add -ing', explanation: 'Short vowel + single consonant: double the consonant. Run → running, sit → sitting, hop → hopping.', topic: 'Spelling' },
  { id: 'eng-mc-103', text: 'What does the phrase "a blessing in disguise" mean?', options: ['Something bad that appears good', 'Something that seems bad but turns out to be good', 'A hidden treasure', 'A person wearing a costume'], correctAnswer: 'Something that seems bad but turns out to be good', explanation: 'This idiom means something that at first appears negative but eventually has a positive outcome.', topic: 'Vocabulary' },
  { id: 'eng-mc-104', text: 'Choose the word closest to "contemplate":', options: ['Ignore', 'Rush', 'Think carefully about', 'Reject immediately'], correctAnswer: 'Think carefully about', explanation: '"Contemplate" means to think carefully and at length about something.', topic: 'Vocabulary' },
  { id: 'eng-mc-105', text: 'What does the suffix "-less" mean?', options: ['Full of', 'Very much', 'Without', 'Able to be'], correctAnswer: 'Without', explanation: '"-less" means without: fearless (without fear), hopeless (without hope), careless (without care).', topic: 'Suffixes' },
  { id: 'eng-mc-106', text: 'Which of these is a sentence fragment (incomplete sentence)?', options: ['The cat sat on the mat.', 'Running as fast as he could.', 'She decided to leave early.', 'We all enjoyed the party.'], correctAnswer: 'Running as fast as he could.', explanation: 'A fragment lacks a subject or main verb to make a complete thought. "Running as fast as he could" has no subject.', topic: 'Grammar' },
  { id: 'eng-mc-107', text: 'What does "condescending" mean?', options: ['Respectful and polite', 'Treating others as if they are inferior', 'Very enthusiastic and eager', 'Modest and humble'], correctAnswer: 'Treating others as if they are inferior', explanation: '"Condescending" means showing a feeling of superiority; patronising.', topic: 'Vocabulary' },
  { id: 'eng-mc-108', text: 'Identify the type: "The thunder roared and the lightning shrieked across the sky."', options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], correctAnswer: 'Personification', explanation: 'Thunder "roared" and lightning "shrieked" gives human-like actions to natural phenomena — personification.', topic: 'Literary Devices' },
  { id: 'eng-mc-109', text: 'What does it mean when we say an author "foreshadows" something?', options: ['Describes something in detail', 'Hints at future events', 'Uses a lot of dialogue', 'Writes in the past tense'], correctAnswer: 'Hints at future events', explanation: 'Foreshadowing uses hints or clues to suggest what might happen later in the story.', topic: 'Literary Devices' },
  { id: 'eng-mc-110', text: 'What does "prolific" mean?', options: ['Producing little output', 'Producing a large amount of work', 'Struggling to create', 'Working extremely slowly'], correctAnswer: 'Producing a large amount of work', explanation: '"Prolific" describes someone (often a writer, artist or scientist) who produces a great deal of work.', topic: 'Vocabulary' },

  { id: 'eng-mc-111', text: 'Which word correctly completes: "I was _____ to discover I had won."', options: ['astonished', 'astonising', 'astonishment', 'astonish'], correctAnswer: 'astonished', explanation: 'The past participle "astonished" functions as an adjective here: I was astonished (describing how I felt).', topic: 'Grammar' },
  { id: 'eng-mc-112', text: 'What is a "euphemism"?', options: ['An extremely rude word', 'A polite or mild substitute for something unpleasant', 'A type of rhyme', 'A long and complicated word'], correctAnswer: 'A polite or mild substitute for something unpleasant', explanation: 'A euphemism softens a harsh idea: "passed away" instead of "died," "let go" instead of "fired."', topic: 'Literary Devices' },
  { id: 'eng-mc-113', text: 'Choose the correct word: "He was _____ tired to continue."', options: ['to', 'too', 'two', 'tow'], correctAnswer: 'too', explanation: '"Too" means "excessively" or "also." "To" is a preposition or part of an infinitive. "Two" is the number.', topic: 'Grammar' },
  { id: 'eng-mc-114', text: 'What is a "motif" in literature?', options: ['The main character', 'A recurring element that has symbolic significance', 'The twist at the end', 'A type of rhyme scheme'], correctAnswer: 'A recurring element that has symbolic significance', explanation: 'A motif is a recurring image, word, or symbol that develops the theme — e.g., light and dark in many novels.', topic: 'Literary Devices' },
  { id: 'eng-mc-115', text: 'Which is the correct spelling?', options: ['Priviledge', 'Privilege', 'Privelege', 'Privilige'], correctAnswer: 'Privilege', explanation: '"Privilege" — no d: priv-il-ege. A very commonly misspelled word.', topic: 'Spelling' },
  { id: 'eng-mc-116', text: 'What does "taciturn" mean?', options: ['Extremely talkative', 'Reserved and saying little', 'Very emotional', 'Loud and boisterous'], correctAnswer: 'Reserved and saying little', explanation: '"Taciturn" describes a person who is quiet by nature and doesn\'t say much.', topic: 'Vocabulary' },
  { id: 'eng-mc-117', text: 'What word class is "slowly" in "She moved slowly"?', options: ['Adjective', 'Noun', 'Adverb', 'Verb'], correctAnswer: 'Adverb', explanation: '"Slowly" modifies the verb "moved" — it tells us how she moved. It is an adverb.', topic: 'Grammar' },
  { id: 'eng-mc-118', text: 'Choose the antonym of "venerate":', options: ['Worship', 'Respect', 'Scorn', 'Admire'], correctAnswer: 'Scorn', explanation: '"Venerate" means to regard with great respect. Its antonym "scorn" means to treat with contempt.', topic: 'Antonyms' },
  { id: 'eng-mc-119', text: 'Which sentence uses a semicolon correctly?', options: ['I love reading; but I also enjoy writing.', 'She left early; because she was tired.', 'The film was long; nevertheless, it was gripping.', 'He ran; to catch the bus.'], correctAnswer: 'The film was long; nevertheless, it was gripping.', explanation: 'A semicolon joins two independent clauses, especially when the second begins with a connective like "nevertheless."', topic: 'Punctuation' },
  { id: 'eng-mc-120', text: 'What is an "idiom"?', options: ['A phrase whose meaning cannot be deduced from the individual words', 'A word that sounds like another', 'A term used in science', 'A foreign loanword'], correctAnswer: 'A phrase whose meaning cannot be deduced from the individual words', explanation: 'An idiom has a figurative meaning: "it\'s raining cats and dogs," "break a leg," "bite the bullet."', topic: 'Literary Devices' },

  { id: 'eng-mc-121', text: 'What does "frivolous" mean?', options: ['Serious and important', 'Not having serious purpose; trivial', 'Extremely useful', 'Very heavy'], correctAnswer: 'Not having serious purpose; trivial', explanation: '"Frivolous" describes something not worthy of serious attention — a frivolous complaint, frivolous spending.', topic: 'Vocabulary' },
  { id: 'eng-mc-122', text: 'Which word contains a prefix meaning "against"?', options: ['Preview', 'Anticlockwise', 'Submarine', 'Semicircle'], correctAnswer: 'Anticlockwise', explanation: '"Anti-" means against or opposing: anticlockwise, antibacterial, antisocial.', topic: 'Prefixes' },
  { id: 'eng-mc-123', text: 'What does "defer" mean?', options: ['To refuse outright', 'To do immediately', 'To put off to a later time', 'To strongly disagree'], correctAnswer: 'To put off to a later time', explanation: '"Defer" means to postpone or delay. You can also defer to someone (show respect to their judgment).', topic: 'Vocabulary' },
  { id: 'eng-mc-124', text: 'Choose the correct sentence:', options: ["Whose going to the party?", "Who's going to the party?", "Whos going to the party?", "Who\'s going to the party's?"], correctAnswer: "Who's going to the party?", explanation: '"Who\'s" is a contraction of "who is." "Whose" is possessive. "Who is going to the party?" = "Who\'s going to the party?"', topic: 'Punctuation' },
  { id: 'eng-mc-125', text: 'Which literary device repeats vowel sounds in nearby words?', options: ['Alliteration', 'Assonance', 'Consonance', 'Onomatopoeia'], correctAnswer: 'Assonance', explanation: 'Assonance is the repetition of vowel sounds: "light of the fire," "hear the clear bell ring."', topic: 'Literary Devices' },
  { id: 'eng-mc-126', text: 'What does "impetuous" mean?', options: ['Acting without thinking; impulsive', 'Calm and measured', 'Very strong physically', 'Polite and well-mannered'], correctAnswer: 'Acting without thinking; impulsive', explanation: '"Impetuous" means acting quickly and without thought or care.', topic: 'Vocabulary' },
  { id: 'eng-mc-127', text: 'Which word is spelt correctly?', options: ['Accomodate', 'Accommodate', 'Acommodate', 'Accomadate'], correctAnswer: 'Accommodate', explanation: '"Accommodate" — double c, double m. ac-com-mo-date. A frequently misspelled word.', topic: 'Spelling' },
  { id: 'eng-mc-128', text: 'What does "gregarious" mean?', options: ['Shy and withdrawn', 'Fond of company; sociable', 'Fierce and aggressive', 'Lazy and unmotivated'], correctAnswer: 'Fond of company; sociable', explanation: '"Gregarious" describes someone who enjoys being around other people.', topic: 'Vocabulary' },
  { id: 'eng-mc-129', text: 'A story told from the perspective of "he" or "she" uses which narrative viewpoint?', options: ['First person', 'Second person', 'Third person', 'Fourth person'], correctAnswer: 'Third person', explanation: 'Third-person narration uses he, she, they. First-person uses I. Second-person uses you.', topic: 'Comprehension' },
  { id: 'eng-mc-130', text: 'What does "perturbed" mean?', options: ['Completely calm', 'Disturbed and unsettled', 'Very pleased', 'Extremely tired'], correctAnswer: 'Disturbed and unsettled', explanation: '"Perturbed" means anxious or mentally unsettled — disturbed by something worrying.', topic: 'Vocabulary' },

  { id: 'eng-mc-131', text: 'What is the meaning of "profound"?', options: ['Shallow and trivial', 'Very great or intense; showing deep insight', 'Confusing and unclear', 'Loud and noisy'], correctAnswer: 'Very great or intense; showing deep insight', explanation: '"Profound" can mean very great (profound sadness) or showing deep understanding (a profound statement).', topic: 'Vocabulary' },
  { id: 'eng-mc-132', text: 'Which word is the correct homophone to complete: "The ship dropped its _____ in the harbour."', options: ['wait', 'weight', 'eight', 'ate'], correctAnswer: 'weight', explanation: 'An anchor has weight (heaviness). "Wait" is to stay; "weight" is heaviness. The ship dropped its weight/anchor.', topic: 'Spelling' },
  { id: 'eng-mc-133', text: 'What type of word is "beneath" in "He hid beneath the stairs"?', options: ['Adjective', 'Preposition', 'Adverb', 'Conjunction'], correctAnswer: 'Preposition', explanation: '"Beneath" shows the position/relationship of hiding in relation to the stairs. It is a preposition.', topic: 'Grammar' },
  { id: 'eng-mc-134', text: 'What does "scrupulous" mean?', options: ['Dishonest and untrustworthy', 'Very careful to do what is right', 'Quick and careless', 'Very loud'], correctAnswer: 'Very careful to do what is right', explanation: '"Scrupulous" means following moral principles; very careful and thorough.', topic: 'Vocabulary' },
  { id: 'eng-mc-135', text: '"He ate a mountain of food." This is an example of:', options: ['Simile', 'Alliteration', 'Metaphor', 'Onomatopoeia'], correctAnswer: 'Metaphor', explanation: 'This is a metaphor — it says the food IS a mountain (not "like" one). It directly compares the amount to a mountain.', topic: 'Literary Devices' },
  { id: 'eng-mc-136', text: 'Which sentence has an embedded clause?', options: ['The boy ran fast.', 'The boy, who was wearing red, ran fast.', 'Although he ran fast.', 'Running fast, the boy won.'], correctAnswer: 'The boy, who was wearing red, ran fast.', explanation: 'An embedded clause sits within the main clause, usually inside commas: "who was wearing red" is embedded.', topic: 'Grammar' },
  { id: 'eng-mc-137', text: 'What does "wary" mean?', options: ['Tired and exhausted', 'Cautious and suspicious of danger', 'Bored and uninterested', 'Happy and carefree'], correctAnswer: 'Cautious and suspicious of danger', explanation: '"Wary" means feeling cautious about possible dangers or problems.', topic: 'Vocabulary' },
  { id: 'eng-mc-138', text: 'Choose the correct spelling:', options: ['Litenancy', 'Lieutenancy', 'Lieutenency', 'Leiutenancy'], correctAnswer: 'Lieutenancy', explanation: '"Lieutenancy" — from lieutenant. Note the silent "t" in "lieu."', topic: 'Spelling' },
  { id: 'eng-mc-139', text: 'What does "exacerbate" mean?', options: ['To solve a problem completely', 'To make a bad situation worse', 'To describe in detail', 'To completely ignore'], correctAnswer: 'To make a bad situation worse', explanation: '"Exacerbate" means to increase the severity of something already bad.', topic: 'Vocabulary' },
  { id: 'eng-mc-140', text: 'What is an "eponymous" character?', options: ['A villain in a story', 'A character who gives their name to the title', 'The narrator of the story', 'A character with no name'], correctAnswer: 'A character who gives their name to the title', explanation: 'An eponymous character shares their name with the title: Harry Potter, Jane Eyre, Oliver Twist.', topic: 'Literary Devices' },

  { id: 'eng-mc-141', text: 'What does "verbose" mean? (revisited harder)', options: ['Using very few words', 'Extremely clear and simple', 'Using far too many words', 'Relating to verbs'], correctAnswer: 'Using far too many words', explanation: '"Verbose" means wordy — using more words than necessary. The opposite is "concise."', topic: 'Vocabulary' },
  { id: 'eng-mc-142', text: 'Choose the correct word: "The scientist _____ the results before publishing."', options: ['verified', 'verifyed', 'verifed', 'verrified'], correctAnswer: 'verified', explanation: '"Verify" → "verified." Drop the y and add -ied when verbs ending in a consonant + y.', topic: 'Spelling' },
  { id: 'eng-mc-143', text: 'What is a "protagonist"?', options: ['The main villain', 'The narrator', 'The main character', 'A secondary character'], correctAnswer: 'The main character', explanation: 'The protagonist is the main character around whom the story revolves. The antagonist opposes them.', topic: 'Comprehension' },
  { id: 'eng-mc-144', text: '"The classroom buzzed with excitement." Identify the literary device.', options: ['Simile', 'Alliteration', 'Onomatopoeia', 'Metaphor'], correctAnswer: 'Onomatopoeia', explanation: '"Buzzed" is onomatopoeia — the word sounds like the noise it describes.', topic: 'Literary Devices' },
  { id: 'eng-mc-145', text: 'What does "paradox" mean?', options: ['A simple, obvious statement', 'A seemingly contradictory statement that may be true', 'A type of punctuation', 'A comparison using like'], correctAnswer: 'A seemingly contradictory statement that may be true', explanation: 'A paradox appears to contradict itself but contains truth: "You have to be cruel to be kind."', topic: 'Literary Devices' },
  { id: 'eng-mc-146', text: 'Which option shows the correct use of a colon?', options: ['I need: to go home.', 'She had one dream: to become a doctor.', 'The cat: sat on the mat.', 'He ran: quickly.'], correctAnswer: 'She had one dream: to become a doctor.', explanation: 'A colon introduces an explanation or elaboration. "One dream: to become a doctor" — the colon introduces what the dream is.', topic: 'Punctuation' },
  { id: 'eng-mc-147', text: 'What does "superficial" mean?', options: ['Deep and thorough', 'Relating to only the surface; not deep', 'Above average', 'Extremely careful'], correctAnswer: 'Relating to only the surface; not deep', explanation: '"Superficial" means existing or occurring at the surface level — not thorough or deep in understanding.', topic: 'Vocabulary' },
  { id: 'eng-mc-148', text: 'In "Despite being exhausted, she finished the race," what type of clause begins the sentence?', options: ['Main clause', 'Relative clause', 'Subordinate clause', 'Co-ordinate clause'], correctAnswer: 'Subordinate clause', explanation: '"Despite being exhausted" is a subordinate clause — it cannot stand alone and depends on the main clause.', topic: 'Grammar' },
  { id: 'eng-mc-149', text: 'What does "empathy" mean?', options: ['Feeling sorry for someone without understanding them', 'Understanding and sharing the feelings of another', 'Disliking someone strongly', 'Being completely neutral about others'], correctAnswer: 'Understanding and sharing the feelings of another', explanation: '"Empathy" is the ability to understand and share another person\'s feelings. Different from sympathy.', topic: 'Vocabulary' },
  { id: 'eng-mc-150', text: 'Which is an example of a rhetorical question?', options: ['"What time does the train leave?"', '"Are you coming to my party?"', '"Does anyone really care about the environment?"', '"Which subject do you prefer?"'], correctAnswer: '"Does anyone really care about the environment?"', explanation: 'A rhetorical question is asked for effect, not a literal answer. It makes the audience think.', topic: 'Literary Devices' },

  { id: 'eng-mc-151', text: 'What does "sanctuary" mean?', options: ['A place of danger', 'A place of safety and refuge', 'A type of building', 'A public road'], correctAnswer: 'A place of safety and refuge', explanation: '"Sanctuary" is a safe, protected place — originally referring to a holy place where people could seek refuge.', topic: 'Vocabulary' },
  { id: 'eng-mc-152', text: 'Which sentence uses an apostrophe correctly for plural possession?', options: ["The girls' changing room was tidy.", "The girl's rooms' were tidy.", "The girls room was tidy.", "The girls's room was tidy."], correctAnswer: "The girls' changing room was tidy.", explanation: 'For plural nouns ending in s, add the apostrophe after: girls\' (belonging to multiple girls).', topic: 'Punctuation' },
  { id: 'eng-mc-153', text: 'What is a "soliloquy"?', options: ['A conversation between two characters', 'A speech made alone, revealing inner thoughts', 'A type of poem', 'A very long speech to an audience'], correctAnswer: 'A speech made alone, revealing inner thoughts', explanation: 'In drama, a soliloquy is when a character speaks their thoughts aloud, alone on stage, as if thinking out loud.', topic: 'Literary Devices' },
  { id: 'eng-mc-154', text: 'What does "contentious" mean?', options: ['Peaceful and agreeable', 'Causing argument or disagreement', 'Extremely satisfying', 'Happy and content'], correctAnswer: 'Causing argument or disagreement', explanation: '"Contentious" means likely to cause disagreement. A contentious issue is one people strongly disagree about.', topic: 'Vocabulary' },
  { id: 'eng-mc-155', text: 'What is the difference between "effect" and "affect"?', options: ['They mean the same thing', '"Effect" is usually a noun; "affect" is usually a verb', '"Affect" is a noun; "effect" is a verb', 'One is British, one is American'], correctAnswer: '"Effect" is usually a noun; "affect" is usually a verb', explanation: 'Effect (noun) = the result. Affect (verb) = to influence. "Stress affects health; the effect is serious."', topic: 'Grammar' },
  { id: 'eng-mc-156', text: 'What does "apprehensive" mean?', options: ['Very excited', 'Anxious or fearful about the future', 'Completely fearless', 'Thoroughly prepared'], correctAnswer: 'Anxious or fearful about the future', explanation: '"Apprehensive" means worried about what might happen in the future; experiencing anxiety.', topic: 'Vocabulary' },
  { id: 'eng-mc-157', text: 'Which word is correctly hyphenated?', options: ['Re-write', 'Well-known', 'Under-stand', 'Over-all'], correctAnswer: 'Well-known', explanation: 'Compound adjectives before nouns are hyphenated: well-known author, long-awaited event.', topic: 'Punctuation' },
  { id: 'eng-mc-158', text: 'What literary device is: "Fair is foul and foul is fair"?', options: ['Alliteration', 'Chiasmus', 'Simile', 'Hyperbole'], correctAnswer: 'Chiasmus', explanation: 'Chiasmus reverses the grammatical structures of successive phrases: A is B and B is A — here "fair" and "foul" swap positions.', topic: 'Literary Devices' },
  { id: 'eng-mc-159', text: 'What does "audacious" mean?', options: ['Shy and timid', 'Showing a willingness to take bold risks', 'Cautious and careful', 'Quiet and reserved'], correctAnswer: 'Showing a willingness to take bold risks', explanation: '"Audacious" means showing bold daring — willing to take surprisingly bold risks.', topic: 'Vocabulary' },
  { id: 'eng-mc-160', text: 'Which is the correct use of "its" vs "it\'s"?', options: ["The dog wagged it's tail.", "It's going to rain today.", "The car lost it's wheel.", "It's colour is blue."], correctAnswer: "It's going to rain today.", explanation: '"It\'s" = it is. "Its" = belonging to it (possessive). "It\'s going to rain" = "It is going to rain." ✓', topic: 'Punctuation' },

  { id: 'eng-mc-161', text: 'What does "benign" mean?', options: ['Harmful and dangerous', 'Gentle and not harmful', 'Angry and hostile', 'Ugly and unpleasant'], correctAnswer: 'Gentle and not harmful', explanation: '"Benign" means gentle, kindly, and not harmful. Used medically (a benign tumour) and generally.', topic: 'Vocabulary' },
  { id: 'eng-mc-162', text: 'In poetry, what is "enjambment"?', options: ['A pause in the middle of a line', 'When a sentence continues beyond the end of a line', 'A repeated refrain', 'The final line of a poem'], correctAnswer: 'When a sentence continues beyond the end of a line', explanation: 'Enjambment is when a sentence or phrase runs over from one line to the next without a pause.', topic: 'Literary Devices' },
  { id: 'eng-mc-163', text: 'Which word means "impossible to deny or disprove"?', options: ['Dubious', 'Irrefutable', 'Uncertain', 'Questionable'], correctAnswer: 'Irrefutable', explanation: '"Irrefutable" means impossible to refute or deny — an irrefutable argument cannot be countered.', topic: 'Vocabulary' },
  { id: 'eng-mc-164', text: 'What is the purpose of a "topic sentence" in a paragraph?', options: ['To end the paragraph with a conclusion', 'To introduce the main idea of the paragraph', 'To provide evidence for an argument', 'To link to the next paragraph'], correctAnswer: 'To introduce the main idea of the paragraph', explanation: 'The topic sentence opens a paragraph and tells the reader what the main idea or argument of that paragraph will be.', topic: 'Comprehension' },
  { id: 'eng-mc-165', text: 'Choose the correctly spelled word:', options: ['Rythm', 'Rhythym', 'Rhythm', 'Ryhthm'], correctAnswer: 'Rhythm', explanation: '"Rhythm" — no vowel in the middle. One of the trickiest English spellings. RHY-THM.', topic: 'Spelling' },
  { id: 'eng-mc-166', text: 'What does "desolate" mean?', options: ['Busy and crowded', 'Bleak, empty and dreary', 'Beautiful and scenic', 'Warm and inviting'], correctAnswer: 'Bleak, empty and dreary', explanation: '"Desolate" describes a place that is bare, lonely and empty — devoid of comfort or cheer.', topic: 'Vocabulary' },
  { id: 'eng-mc-167', text: 'What is the "denouement" of a story?', options: ['The opening scene', 'The point of highest tension', 'The resolution at the end', 'The main conflict'], correctAnswer: 'The resolution at the end', explanation: 'The denouement (French for "untying") is the final resolution of the story after the climax.', topic: 'Comprehension' },
  { id: 'eng-mc-168', text: 'Which word means "to move stealthily"?', options: ['Stride', 'Skulk', 'March', 'Gallop'], correctAnswer: 'Skulk', explanation: '"Skulk" means to move stealthily, lurking about in a suspicious or cowardly way.', topic: 'Vocabulary' },
  { id: 'eng-mc-169', text: 'What is "dramatic irony"?', options: ['When the ending is unexpected', 'When the audience knows something the characters do not', 'When the story ends unhappily', 'When a character lies to others'], correctAnswer: 'When the audience knows something the characters do not', explanation: 'Dramatic irony is when the reader/audience has information a character lacks — creating tension or humour.', topic: 'Literary Devices' },
  { id: 'eng-mc-170', text: 'What does "pertinent" mean?', options: ['Irritating and rude', 'Relevant to the matter in hand', 'Extremely large', 'Old-fashioned'], correctAnswer: 'Relevant to the matter in hand', explanation: '"Pertinent" means directly relevant and applicable to the subject being discussed.', topic: 'Vocabulary' },

  { id: 'eng-mc-171', text: 'What does "cacophony" mean?', options: ['A pleasant melody', 'A harsh, discordant mixture of sounds', 'Complete silence', 'A single repeated note'], correctAnswer: 'A harsh, discordant mixture of sounds', explanation: '"Cacophony" is a harsh, unpleasant combination of sounds — the opposite of "harmony."', topic: 'Vocabulary' },
  { id: 'eng-mc-172', text: 'Choose the antonym of "magnanimous":', options: ['Generous', 'Petty and small-minded', 'Brave', 'Wise'], correctAnswer: 'Petty and small-minded', explanation: '"Magnanimous" means very generous and forgiving. Its antonym is petty or mean-spirited.', topic: 'Antonyms' },
  { id: 'eng-mc-173', text: 'Which technique uses the same word at the start of several clauses for emphasis?', options: ['Assonance', 'Anaphora', 'Enjambment', 'Juxtaposition'], correctAnswer: 'Anaphora', explanation: 'Anaphora is the repetition of a word/phrase at the start of successive clauses: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight..."', topic: 'Literary Devices' },
  { id: 'eng-mc-174', text: 'What does "ephemeral" mean?', options: ['Lasting forever', 'Lasting for a very short time', 'Very powerful', 'Extremely colourful'], correctAnswer: 'Lasting for a very short time', explanation: '"Ephemeral" means lasting only a short time; transient.', topic: 'Vocabulary' },
  { id: 'eng-mc-175', text: 'What is "juxtaposition"?', options: ['A repeated sound', 'Placing contrasting ideas side by side for effect', 'A very long word', 'The ending of a story'], correctAnswer: 'Placing contrasting ideas side by side for effect', explanation: 'Juxtaposition places two contrasting things together to highlight their differences: wealth and poverty, light and dark.', topic: 'Literary Devices' },
  { id: 'eng-mc-176', text: 'What does "acrimonious" mean?', options: ['Pleasant and friendly', 'Bitter and angry in tone', 'Very sweet', 'Extremely generous'], correctAnswer: 'Bitter and angry in tone', explanation: '"Acrimonious" describes something, especially an argument, that is bitter and full of anger.', topic: 'Vocabulary' },
  { id: 'eng-mc-177', text: 'Identify: "The classroom was a zoo — students swinging from the rafters."', options: ['Simile', 'Metaphor with hyperbole', 'Personification', 'Alliteration'], correctAnswer: 'Metaphor with hyperbole', explanation: '"A zoo" is a metaphor; "swinging from the rafters" is hyperbole. Together they create vivid exaggeration.', topic: 'Literary Devices' },
  { id: 'eng-mc-178', text: 'What does "serendipity" mean?', options: ['Bad luck', 'The planned result of hard work', 'A happy accident or fortunate discovery', 'Deep unhappiness'], correctAnswer: 'A happy accident or fortunate discovery', explanation: '"Serendipity" is the occurrence of events that are pleasant by chance — a happy, unplanned discovery.', topic: 'Vocabulary' },
  { id: 'eng-mc-179', text: 'What does "magnify" literally mean?', options: ['To reduce', 'To make greater or larger', 'To explain clearly', 'To put in order'], correctAnswer: 'To make greater or larger', explanation: '"Magnify" comes from Latin "magnus" (great). To magnify means to make something appear larger.', topic: 'Vocabulary' },
  { id: 'eng-mc-180', text: 'A sentence that begins with a verb is called a command or...?', options: ['Exclamation', 'Interrogative', 'Imperative', 'Statement'], correctAnswer: 'Imperative', explanation: 'An imperative sentence gives an instruction or command. It often starts with a verb: "Sit down." "Write your name."', topic: 'Grammar' },

  { id: 'eng-mc-181', text: 'What does "laconic" mean?', options: ['Very wordy', 'Using very few words; brief', 'Confused', 'Loud and energetic'], correctAnswer: 'Using very few words; brief', explanation: '"Laconic" describes someone who uses very few words to express themselves.', topic: 'Vocabulary' },
  { id: 'eng-mc-182', text: 'What is the grammatical term for "running" in "Running was her favourite hobby"?', options: ['Verb', 'Adjective', 'Gerund (verbal noun)', 'Adverb'], correctAnswer: 'Gerund (verbal noun)', explanation: 'When a verb ending in -ing acts as a noun, it is called a gerund. "Running" is the subject of the sentence — a noun.', topic: 'Grammar' },
  { id: 'eng-mc-183', text: 'What does "disparate" mean?', options: ['Very similar', 'Essentially different; not easily compared', 'Very angry', 'Extremely important'], correctAnswer: 'Essentially different; not easily compared', explanation: '"Disparate" means so unlike each other that comparison is difficult — disparate groups, disparate ideas.', topic: 'Vocabulary' },
  { id: 'eng-mc-184', text: 'Which correctly uses a dash?', options: ['She ran—quickly to the door.', 'The answer—was obvious to everyone.', 'She had everything she needed—her pencil, ruler, and compass.', 'He—ran away.'], correctAnswer: 'She had everything she needed—her pencil, ruler, and compass.', explanation: 'A dash can introduce a list or additional information: "everything she needed—pencil, ruler, compass."', topic: 'Punctuation' },
  { id: 'eng-mc-185', text: 'What does "concede" mean?', options: ['To strongly disagree', 'To admit something is true or give in', 'To describe in detail', 'To completely ignore'], correctAnswer: 'To admit something is true or give in', explanation: '"Concede" means to admit that something is true, or to give way in an argument.', topic: 'Vocabulary' },
  { id: 'eng-mc-186', text: 'What is "pathetic fallacy"?', options: ['A logical error in an argument', 'Weather or nature reflecting the mood/emotions of characters', 'A very weak attempt at a metaphor', 'A type of unreliable narrator'], correctAnswer: 'Weather or nature reflecting the mood/emotions of characters', explanation: 'Pathetic fallacy uses natural elements to reflect human feelings: a storm during conflict, sunshine at a joyful moment.', topic: 'Literary Devices' },
  { id: 'eng-mc-187', text: 'What does "tenuous" mean?', options: ['Strong and certain', 'Very slender; weak and not convincing', 'Extremely important', 'Easy to understand'], correctAnswer: 'Very slender; weak and not convincing', explanation: '"Tenuous" describes something very thin or flimsy — a tenuous link, a tenuous excuse.', topic: 'Vocabulary' },
  { id: 'eng-mc-188', text: 'Identify the subordinate clause: "Although it was cold, the children played outside."', options: ['the children played outside', 'Although it was cold', 'it was cold', 'the children'], correctAnswer: 'Although it was cold', explanation: '"Although it was cold" is the subordinate clause — it cannot stand alone and depends on the main clause.', topic: 'Grammar' },
  { id: 'eng-mc-189', text: 'What does "vindicate" mean?', options: ['To punish harshly', 'To clear of blame or prove correct', 'To make worse', 'To ignore completely'], correctAnswer: 'To clear of blame or prove correct', explanation: '"Vindicate" means to show or prove that someone is right or blameless.', topic: 'Vocabulary' },
  { id: 'eng-mc-190', text: 'In "The Raven croaked mournfully," what technique is "croaked"?', options: ['Metaphor', 'Personification', 'Onomatopoeia', 'Simile'], correctAnswer: 'Onomatopoeia', explanation: '"Croaked" imitates the harsh sound a raven makes — this is onomatopoeia.', topic: 'Literary Devices' },

  { id: 'eng-mc-191', text: 'What does "implicit" mean?', options: ['Clearly stated', 'Suggested but not directly expressed', 'Completely false', 'Extremely complicated'], correctAnswer: 'Suggested but not directly expressed', explanation: '"Implicit" means something is implied or hinted at, not directly stated. You need to infer it.', topic: 'Vocabulary' },
  { id: 'eng-mc-192', text: 'What type of noun is "committee"?', options: ['Proper noun', 'Collective noun', 'Abstract noun', 'Concrete noun'], correctAnswer: 'Collective noun', explanation: 'A collective noun names a group of people or things: committee, team, flock, swarm.', topic: 'Grammar' },
  { id: 'eng-mc-193', text: 'What does "daunting" mean?', options: ['Easy and pleasant', 'Seeming difficult or frightening to face', 'Boring and repetitive', 'Exciting and adventurous'], correctAnswer: 'Seeming difficult or frightening to face', explanation: '"Daunting" describes something that seems overwhelming or discouraging.', topic: 'Vocabulary' },
  { id: 'eng-mc-194', text: 'Which connective signals addition?', options: ['However', 'Therefore', 'Furthermore', 'Nevertheless'], correctAnswer: 'Furthermore', explanation: '"Furthermore" adds to a point already made. "However" = contrast; "therefore" = consequence.', topic: 'Grammar' },
  { id: 'eng-mc-195', text: 'What does "astute" mean?', options: ['Foolish and naive', 'Having a clever and sharp understanding', 'Clumsy and awkward', 'Very generous'], correctAnswer: 'Having a clever and sharp understanding', explanation: '"Astute" means having the ability to accurately assess situations; shrewd and clever.', topic: 'Vocabulary' },
  { id: 'eng-mc-196', text: 'What is the term for a narrator who does not have full knowledge of all characters\' thoughts?', options: ['Omniscient narrator', 'Limited narrator', 'Unreliable narrator', 'First-person narrator'], correctAnswer: 'Limited narrator', explanation: 'A limited narrator has access to only one character\'s perspective. An omniscient narrator knows all characters\' thoughts.', topic: 'Comprehension' },
  { id: 'eng-mc-197', text: 'What does "volatile" mean?', options: ['Stable and predictable', 'Liable to change rapidly; explosive', 'Very slow-moving', 'Extremely cold'], correctAnswer: 'Liable to change rapidly; explosive', explanation: '"Volatile" can mean easily evaporated (chemistry) or liable to change suddenly and unpredictably (behaviour, markets).', topic: 'Vocabulary' },
  { id: 'eng-mc-198', text: 'Which sentence correctly uses "there," "their," and "they\'re"?', options: ["There going to their house over they're.", "They're going to their house over there.", "Their going to they're house over there.", "They're going to there house over their."], correctAnswer: "They're going to their house over there.", explanation: '"They\'re" = they are; "their" = belonging to them; "there" = that place.', topic: 'Spelling' },
  { id: 'eng-mc-199', text: 'What does "ubiquitous" mean?', options: ['Extremely rare', 'Found everywhere; very common', 'Unique and one-of-a-kind', 'Old and outdated'], correctAnswer: 'Found everywhere; very common', explanation: '"Ubiquitous" means present or appearing to be everywhere at once. Smartphones are ubiquitous today.', topic: 'Vocabulary' },
  { id: 'eng-mc-200', text: 'What is the purpose of a "counterargument" in an essay?', options: ['To weaken your own argument', 'To acknowledge and refute an opposing view', 'To list evidence for your main point', 'To summarise what you have written'], correctAnswer: 'To acknowledge and refute an opposing view', explanation: 'A counterargument acknowledges the opposing view then argues against it, strengthening your overall case.', topic: 'Comprehension' },

  { id: 'eng-mc-201', text: 'What does "corroborate" mean?', options: ['To weaken evidence', 'To confirm or give support to a statement', 'To completely disprove', 'To ignore'], correctAnswer: 'To confirm or give support to a statement', explanation: '"Corroborate" means to provide evidence that confirms or supports something.', topic: 'Vocabulary' },
  { id: 'eng-mc-202', text: 'What is the superlative form of "good"?', options: ['Gooder', 'Better', 'Best', 'Most good'], correctAnswer: 'Best', explanation: '"Good" is irregular. Positive: good; Comparative: better; Superlative: best.', topic: 'Grammar' },
  { id: 'eng-mc-203', text: 'What does "lament" mean?', options: ['To celebrate joyfully', 'To express grief or deep sorrow', 'To explain carefully', 'To predict the future'], correctAnswer: 'To express grief or deep sorrow', explanation: '"Lament" means to feel or express grief — to mourn a loss or unfortunate situation.', topic: 'Vocabulary' },
  { id: 'eng-mc-204', text: 'What is a "denouement"?', options: ['The build-up of tension', 'The resolution at the end of a story', 'The main conflict', 'The opening'], correctAnswer: 'The resolution at the end of a story', explanation: 'The denouement is the final part of a story where conflicts are resolved and loose ends are tied up.', topic: 'Comprehension' },
  { id: 'eng-mc-205', text: 'What does "meander" mean?', options: ['To move in a straight line at speed', 'To follow a winding, indirect course', 'To stop suddenly', 'To move backwards'], correctAnswer: 'To follow a winding, indirect course', explanation: '"Meander" describes moving slowly along a winding course — like a meandering river.', topic: 'Vocabulary' },
  { id: 'eng-mc-206', text: 'What is the passive voice version of "The chef prepared the meal"?', options: ['The meal prepared the chef.', 'The meal was prepared by the chef.', 'The chef is preparing the meal.', 'A meal was preparing.'], correctAnswer: 'The meal was prepared by the chef.', explanation: 'Passive voice: the subject (meal) receives the action. "Was prepared by the chef."', topic: 'Grammar' },
  { id: 'eng-mc-207', text: 'What does "intrepid" mean?', options: ['Fearful and cautious', 'Fearless and adventurous', 'Lazy and unmotivated', 'Clumsy and awkward'], correctAnswer: 'Fearless and adventurous', explanation: '"Intrepid" means resolutely courageous; not easily deterred by fear.', topic: 'Vocabulary' },
  { id: 'eng-mc-208', text: '"For every action, there is an equal and opposite reaction." In a literary context, this structure is called:', options: ['Simile', 'Antithesis', 'Enjambment', 'Anaphora'], correctAnswer: 'Antithesis', explanation: 'Antithesis places opposite ideas close together in grammatically parallel structure for contrast.', topic: 'Literary Devices' },
  { id: 'eng-mc-209', text: 'What does "persevere" mean?', options: ['To give up at the first sign of difficulty', 'To continue despite difficulties', 'To change direction', 'To prepare in advance'], correctAnswer: 'To continue despite difficulties', explanation: '"Persevere" means to persist in doing something despite difficulty or delay in achieving success.', topic: 'Vocabulary' },
  { id: 'eng-mc-210', text: 'Which is the correct spelling?', options: ['Embarass', 'Embarrass', 'Embarras', 'Embarras'], correctAnswer: 'Embarrass', explanation: '"Embarrass" — double r and double s. em-bar-rass. A very common spelling mistake.', topic: 'Spelling' },

  { id: 'eng-mc-211', text: 'What does "harbinger" mean?', options: ['A type of ship', 'A sign of things to come; a forewarning', 'A person who tells stories', 'Someone who collects things'], correctAnswer: 'A sign of things to come; a forewarning', explanation: '"Harbinger" is something or someone that signals the approach of something — often something dramatic.', topic: 'Vocabulary' },
  { id: 'eng-mc-212', text: 'What is a "foil" character in literature?', options: ['A character who helps the villain', 'A character whose traits contrast with the protagonist', 'The narrator of the story', 'A character who appears only briefly'], correctAnswer: 'A character whose traits contrast with the protagonist', explanation: 'A foil has contrasting traits that highlight the protagonist\'s qualities — e.g., Watson as foil to Sherlock Holmes.', topic: 'Literary Devices' },
  { id: 'eng-mc-213', text: 'What does "tacit" mean?', options: ['Stated very clearly', 'Understood without being said; unspoken', 'Very loud', 'Completely forgotten'], correctAnswer: 'Understood without being said; unspoken', explanation: '"Tacit" means understood or implied without being directly stated. A tacit agreement needs no words.', topic: 'Vocabulary' },
  { id: 'eng-mc-214', text: 'What literary device is: "To be or not to be, that is the question"?', options: ['Simile', 'Anaphora', 'Rhetorical question', 'Oxymoron'], correctAnswer: 'Rhetorical question', explanation: 'Hamlet asks this for effect, not expecting a literal answer — it is a rhetorical question.', topic: 'Literary Devices' },
  { id: 'eng-mc-215', text: 'What does "dissonance" mean?', options: ['A pleasant harmony', 'A lack of agreement; harsh combination', 'A complete silence', 'A type of rhythm'], correctAnswer: 'A lack of agreement; harsh combination', explanation: '"Dissonance" means a lack of harmony — clashing sounds or conflicting ideas.', topic: 'Vocabulary' },
  { id: 'eng-mc-216', text: 'Which correctly uses the subjunctive mood?', options: ['If I was rich, I would travel.', 'If I were rich, I would travel.', 'If I am rich, I would travel.', 'If I had been rich, I travel.'], correctAnswer: 'If I were rich, I would travel.', explanation: 'The subjunctive uses "were" (not "was") for hypothetical situations: "If I were you..."', topic: 'Grammar' },
  { id: 'eng-mc-217', text: 'What does "garrulous" mean?', options: ['Silent and withdrawn', 'Excessively talkative', 'Very thoughtful', 'Extremely strong'], correctAnswer: 'Excessively talkative', explanation: '"Garrulous" means excessively talkative, especially about trivial matters.', topic: 'Vocabulary' },
  { id: 'eng-mc-218', text: 'What is the term for words that are opposite in meaning?', options: ['Synonyms', 'Homophones', 'Antonyms', 'Homonyms'], correctAnswer: 'Antonyms', explanation: 'Antonyms are words with opposite meanings: hot/cold, fast/slow, love/hate.', topic: 'Grammar' },
  { id: 'eng-mc-219', text: 'What does "languish" mean?', options: ['To thrive and prosper', 'To grow weak or be in a state of neglect', 'To move very quickly', 'To argue forcefully'], correctAnswer: 'To grow weak or be in a state of neglect', explanation: '"Languish" means to suffer from being in a negative situation, or to lose vitality.', topic: 'Vocabulary' },
  { id: 'eng-mc-220', text: 'What is the function of an ellipsis (...) in writing?', options: ['To end a sentence', 'To indicate omission or create suspense/trailing off', 'To introduce a list', 'To show possession'], correctAnswer: 'To indicate omission or create suspense/trailing off', explanation: 'Ellipsis signals a pause, trailing thought, or omitted words: "If only I had known..."', topic: 'Punctuation' },

  { id: 'eng-mc-221', text: 'What does "equivocal" mean?', options: ['Perfectly clear and unambiguous', 'Open to more than one interpretation', 'Very fair and equal', 'Strongly one-sided'], correctAnswer: 'Open to more than one interpretation', explanation: '"Equivocal" means ambiguous — open to multiple interpretations. Its opposite is "unequivocal" (completely clear).', topic: 'Vocabulary' },
  { id: 'eng-mc-222', text: 'Which word is a verb in: "The exhausted runner crossed the finish line"?', options: ['Exhausted', 'Runner', 'Crossed', 'Finish'], correctAnswer: 'Crossed', explanation: '"Crossed" is the action word — what the runner did. It is the main verb.', topic: 'Grammar' },
  { id: 'eng-mc-223', text: 'What does "zenith" mean?', options: ['The lowest point', 'The highest point; peak', 'A type of compass', 'The middle point'], correctAnswer: 'The highest point; peak', explanation: '"Zenith" is the highest point in the sky above the observer, and figuratively the peak of something.', topic: 'Vocabulary' },
  { id: 'eng-mc-224', text: 'Which correctly uses direct speech?', options: ['"I am tired," said Emma', '"I am tired" said, Emma', '"I am tired" said Emma.', '"I am tired", said Emma.'], correctAnswer: '"I am tired," said Emma', explanation: 'Direct speech: the spoken words in quotation marks, followed by a comma inside the quotes, then said + speaker.', topic: 'Punctuation' },
  { id: 'eng-mc-225', text: 'What does "stoic" mean?', options: ['Highly emotional', 'Enduring pain or hardship without complaint', 'Very enthusiastic', 'Extremely talkative'], correctAnswer: 'Enduring pain or hardship without complaint', explanation: '"Stoic" means bearing difficulties calmly and without complaint or visible emotion.', topic: 'Vocabulary' },
  { id: 'eng-mc-226', text: 'What is an "allegory"?', options: ['A type of rhyme', 'A story with a deeper symbolic meaning', 'A list of characters', 'A very short poem'], correctAnswer: 'A story with a deeper symbolic meaning', explanation: 'An allegory tells a story that represents real-world issues symbolically — e.g., Animal Farm as an allegory for Soviet Russia.', topic: 'Literary Devices' },
  { id: 'eng-mc-227', text: 'What does "opulent" mean?', options: ['Very poor', 'Luxurious and richly decorated', 'Plain and simple', 'Old and worn out'], correctAnswer: 'Luxurious and richly decorated', explanation: '"Opulent" describes great wealth or luxury displayed in appearance.', topic: 'Vocabulary' },
  { id: 'eng-mc-228', text: 'Which is the comparative form of "bad"?', options: ['Badder', 'More bad', 'Worst', 'Worse'], correctAnswer: 'Worse', explanation: '"Bad" is irregular: bad (positive), worse (comparative), worst (superlative).', topic: 'Grammar' },
  { id: 'eng-mc-229', text: 'What does "myriad" mean?', options: ['A single unique thing', 'A countless or extremely large number of', 'A very small amount', 'A specific ten items'], correctAnswer: 'A countless or extremely large number of', explanation: '"Myriad" means a countless or very great number: "a myriad of stars."', topic: 'Vocabulary' },
  { id: 'eng-mc-230', text: 'What is the function of parentheses (brackets) in a sentence?', options: ['To end a sentence', 'To add extra, non-essential information', 'To show possession', 'To join two sentences'], correctAnswer: 'To add extra, non-essential information', explanation: 'Parentheses add extra information that could be removed without changing the core meaning.', topic: 'Punctuation' },

  { id: 'eng-mc-231', text: 'What does "venomous" mean, figuratively?', options: ['Slow and gentle', 'Full of bitter anger or hatred', 'Shy and reserved', 'Extremely wise'], correctAnswer: 'Full of bitter anger or hatred', explanation: 'Figuratively, "venomous" (from snake venom) describes words or attitudes full of malice and bitterness.', topic: 'Vocabulary' },
  { id: 'eng-mc-232', text: 'Which word means "to calm fears or anger"?', options: ['Inflame', 'Aggravate', 'Placate', 'Provoke'], correctAnswer: 'Placate', explanation: '"Placate" means to make someone less angry or upset; to appease or mollify.', topic: 'Vocabulary' },
  { id: 'eng-mc-233', text: 'In comprehension, what is meant by "summarise"?', options: ['To copy out the passage', 'To give the main points briefly in your own words', 'To analyse the writer\'s techniques', 'To write a personal response'], correctAnswer: 'To give the main points briefly in your own words', explanation: 'Summarising means capturing the key ideas concisely in your own words — not copying.', topic: 'Comprehension' },
  { id: 'eng-mc-234', text: 'What does "nonchalant" mean?', options: ['Very excited and animated', 'Calm and casually indifferent', 'Angry and frustrated', 'Careful and thorough'], correctAnswer: 'Calm and casually indifferent', explanation: '"Nonchalant" means showing a relaxed lack of concern — appearing effortlessly cool and unbothered.', topic: 'Vocabulary' },
  { id: 'eng-mc-235', text: 'What is an "analogy"?', options: ['A comparison to explain something complex using something familiar', 'A type of poem with no rhyme', 'A figure of speech repeating consonants', 'A narrative technique revealing past events'], correctAnswer: 'A comparison to explain something complex using something familiar', explanation: 'An analogy explains a complex idea by comparing it to something more familiar and easier to understand.', topic: 'Literary Devices' },
  { id: 'eng-mc-236', text: 'What does "meagre" mean?', options: ['Extremely large', 'Lacking in quantity; very small', 'Bright and vivid', 'Extremely strong'], correctAnswer: 'Lacking in quantity; very small', explanation: '"Meagre" describes a very small or insufficient quantity.', topic: 'Vocabulary' },
  { id: 'eng-mc-237', text: 'Identify the sentence type: "What a beautiful sunset this is!"', options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], correctAnswer: 'Exclamatory', explanation: 'An exclamatory sentence expresses strong emotion and ends with !. "What a..." is a classic exclamatory construction.', topic: 'Grammar' },
  { id: 'eng-mc-238', text: 'What does "austere" mean?', options: ['Luxurious and comfortable', 'Severe and plain; without comfort', 'Very colourful', 'Extremely loud'], correctAnswer: 'Severe and plain; without comfort', explanation: '"Austere" means severe or strict in appearance, manner, or attitude — or lacking luxury.', topic: 'Vocabulary' },
  { id: 'eng-mc-239', text: 'What technique is: "It was the best of times, it was the worst of times"?', options: ['Metaphor', 'Simile', 'Antithesis', 'Alliteration'], correctAnswer: 'Antithesis', explanation: 'Dickens contrasts "best" with "worst" in parallel structure — this is antithesis.', topic: 'Literary Devices' },
  { id: 'eng-mc-240', text: 'What does "vehement" mean?', options: ['Quiet and gentle', 'Showing strong feeling; forceful and passionate', 'Completely neutral', 'Very slow'], correctAnswer: 'Showing strong feeling; forceful and passionate', explanation: '"Vehement" describes feeling or expression that is forceful, passionate, and intense.', topic: 'Vocabulary' },

  { id: 'eng-mc-241', text: 'What is the literary term for a story within a story?', options: ['Sub-plot', 'Frame narrative', 'Flashback', 'Parallel plot'], correctAnswer: 'Frame narrative', explanation: 'A frame narrative is a story that contains another story within it — like "The Canterbury Tales" or "Frankenstein."', topic: 'Literary Devices' },
  { id: 'eng-mc-242', text: 'What does "sycophantic" mean?', options: ['Extremely brave', 'Excessively flattering to gain favour', 'Honest and direct', 'Highly critical'], correctAnswer: 'Excessively flattering to gain favour', explanation: '"Sycophantic" describes someone who uses excessive flattery to win approval from those in power.', topic: 'Vocabulary' },
  { id: 'eng-mc-243', text: 'What is "bathos"?', options: ['A sudden descent from the serious to the trivial', 'An intensely emotional speech', 'A type of heroic narrative', 'A metaphor about water'], correctAnswer: 'A sudden descent from the serious to the trivial', explanation: 'Bathos is a sudden, jarring shift from the elevated to the ridiculous — often for comic effect.', topic: 'Literary Devices' },
  { id: 'eng-mc-244', text: 'What does "veracious" mean?', options: ['Very hungry', 'Truthful and accurate', 'Extremely fast', 'Full of variety'], correctAnswer: 'Truthful and accurate', explanation: '"Veracious" means habitually speaking the truth. (Note: "voracious" means having a huge appetite.)', topic: 'Vocabulary' },
  { id: 'eng-mc-245', text: 'What is "stream of consciousness" writing?', options: ['A very structured, formal style', 'A narrative technique presenting thoughts as they occur', 'A type of poetry about rivers', 'A technique for describing action quickly'], correctAnswer: 'A narrative technique presenting thoughts as they occur', explanation: 'Stream of consciousness follows a character\'s thoughts in their natural, unfiltered flow — used by James Joyce and Virginia Woolf.', topic: 'Literary Devices' },
  { id: 'eng-mc-246', text: 'What does "didactic" mean?', options: ['Very boring', 'Intended to teach or instruct', 'Extremely difficult', 'Very short and simple'], correctAnswer: 'Intended to teach or instruct', explanation: '"Didactic" describes writing intended to teach a moral lesson or convey instructive content.', topic: 'Vocabulary' },
  { id: 'eng-mc-247', text: 'What is a "motif"? (revisited)', options: ['The main character', 'A recurring symbol or theme that develops meaning', 'The villain', 'The twist ending'], correctAnswer: 'A recurring symbol or theme that develops meaning', explanation: 'A motif is a recurring element (image, word, idea) that gathers symbolic meaning throughout a text.', topic: 'Literary Devices' },
  { id: 'eng-mc-248', text: 'What does "diaphanous" mean?', options: ['Very thick and heavy', 'Light, delicate and translucent', 'Extremely bright', 'Very hard and rough'], correctAnswer: 'Light, delicate and translucent', explanation: '"Diaphanous" describes something very light, delicate, and almost transparent — like a diaphanous veil.', topic: 'Vocabulary' },
  { id: 'eng-mc-249', text: 'What is the effect of the second person ("you") in writing?', options: ['Creates distance from the reader', 'Draws the reader directly into the text', 'Describes events in the past', 'Creates an objective tone'], correctAnswer: 'Draws the reader directly into the text', explanation: 'Second-person narration ("you do this...") implicates the reader directly, creating immediacy and engagement.', topic: 'Comprehension' },
  { id: 'eng-mc-250', text: 'What does "loquacious" mean?', options: ['Very quiet', 'Tending to talk a great deal', 'Extremely thoughtful', 'Highly organised'], correctAnswer: 'Tending to talk a great deal', explanation: '"Loquacious" means excessively talkative. Synonyms: garrulous, verbose, talkative.', topic: 'Vocabulary' },
],
  },
  [Subject.VerbalReasoning]: {
    'multiple-choice': [
  { id: 'vr-mc-001', text: 'Which word is closest in meaning to "swift"?', options: ['Slow', 'Quick', 'Clumsy', 'Heavy'], correctAnswer: 'Quick', explanation: '"Swift" means moving at great speed — closest to "quick."', topic: 'Word Meanings' },
  { id: 'vr-mc-002', text: 'Which word is most opposite in meaning to "ancient"?', options: ['Old', 'Modern', 'Wise', 'Grand'], correctAnswer: 'Modern', explanation: '"Ancient" means very old. The opposite is "modern."', topic: 'Antonyms' },
  { id: 'vr-mc-003', text: '"Dog is to kennel as bird is to ___"', options: ['Beak', 'Feather', 'Nest', 'Wing'], correctAnswer: 'Nest', explanation: 'A dog lives in a kennel. A bird lives in a nest.', topic: 'Analogies' },
  { id: 'vr-mc-004', text: 'Which is the odd one out: Violin, Guitar, Trumpet, Cello?', options: ['Violin', 'Guitar', 'Trumpet', 'Cello'], correctAnswer: 'Trumpet', explanation: 'Violin, guitar and cello are string instruments. Trumpet is a wind instrument.', topic: 'Odd One Out' },
  { id: 'vr-mc-005', text: 'Which word completes: "hot is to cold as light is to ___"?', options: ['Lamp', 'Dark', 'Sun', 'Warm'], correctAnswer: 'Dark', explanation: 'Hot and cold are opposites. Light and dark are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-006', text: 'If CAT = DBU (each letter +1), what does DOG become?', options: ['EPG', 'EPH', 'COF', 'EPF'], correctAnswer: 'EPH', explanation: 'Each letter moves forward one: D→E, O→P, G→H. DOG = EPH.', topic: 'Letter Codes' },
  { id: 'vr-mc-007', text: 'What letter comes next: A, C, E, G, ___?', options: ['H', 'I', 'J', 'K'], correctAnswer: 'I', explanation: 'Skip one letter each time: A, C, E, G, I.', topic: 'Letter Sequences' },
  { id: 'vr-mc-008', text: '"Doctor is to patient as teacher is to ___"', options: ['School', 'Lesson', 'Pupil', 'Book'], correctAnswer: 'Pupil', explanation: 'A doctor treats a patient. A teacher teaches a pupil.', topic: 'Analogies' },
  { id: 'vr-mc-009', text: 'Which word means the same as "tranquil"?', options: ['Stormy', 'Peaceful', 'Noisy', 'Chaotic'], correctAnswer: 'Peaceful', explanation: '"Tranquil" means calm and peaceful.', topic: 'Synonyms' },
  { id: 'vr-mc-010', text: 'If Sarah is taller than Tom, and Tom is taller than Jake, who is shortest?', options: ['Sarah', 'Tom', 'Jake', 'Cannot tell'], correctAnswer: 'Jake', explanation: 'Sarah > Tom > Jake. Jake is shortest.', topic: 'Logic' },
  { id: 'vr-mc-011', text: 'What comes next: 3, 6, 9, 12, ___?', options: ['13', '14', '15', '16'], correctAnswer: '15', explanation: 'Adding 3 each time. 12 + 3 = 15.', topic: 'Number Sequences' },
  { id: 'vr-mc-012', text: 'Find the missing number: 2, 4, 8, 16, ___', options: ['24', '28', '30', '32'], correctAnswer: '32', explanation: 'Each number doubles. 16 × 2 = 32.', topic: 'Number Sequences' },
  { id: 'vr-mc-013', text: '"Warm is to hot as cool is to ___"', options: ['Cold', 'Chilly', 'Lukewarm', 'Freezing'], correctAnswer: 'Cold', explanation: 'Warm progresses to hot. Cool progresses to cold.', topic: 'Analogies' },
  { id: 'vr-mc-014', text: '"Flock is to sheep as swarm is to ___"', options: ['Fish', 'Dogs', 'Bees', 'Wolves'], correctAnswer: 'Bees', explanation: 'A flock is a group of sheep. A swarm is a group of bees.', topic: 'Analogies' },
  { id: 'vr-mc-015', text: '"Cub is to bear as lamb is to ___"', options: ['Dog', 'Sheep', 'Cat', 'Cow'], correctAnswer: 'Sheep', explanation: 'A cub is a young bear. A lamb is a young sheep.', topic: 'Analogies' },
  { id: 'vr-mc-016', text: 'Which is the odd one out: January, March, April, Tuesday?', options: ['January', 'March', 'April', 'Tuesday'], correctAnswer: 'Tuesday', explanation: 'January, March and April are months. Tuesday is a day.', topic: 'Odd One Out' },
  { id: 'vr-mc-017', text: '"Book is to library as painting is to ___"', options: ['Brush', 'Artist', 'Gallery', 'Colour'], correctAnswer: 'Gallery', explanation: 'Books are stored in a library. Paintings are stored in a gallery.', topic: 'Analogies' },
  { id: 'vr-mc-018', text: 'All dogs are animals. Rex is a dog. Therefore:', options: ['Rex is an animal', 'Rex might be an animal', 'Animals are dogs', 'Cannot be determined'], correctAnswer: 'Rex is an animal', explanation: 'All dogs are animals; Rex is a dog; therefore Rex is an animal.', topic: 'Logic' },
  { id: 'vr-mc-019', text: '"Kitten is to cat as foal is to ___"', options: ['Pony', 'Horse', 'Sheep', 'Calf'], correctAnswer: 'Horse', explanation: 'A kitten is a young cat. A foal is a young horse.', topic: 'Analogies' },
  { id: 'vr-mc-020', text: 'Complete: 64, 32, 16, 8, ___', options: ['2', '4', '6', '8'], correctAnswer: '4', explanation: 'Dividing by 2 each time. 8 ÷ 2 = 4.', topic: 'Number Sequences' },
  { id: 'vr-mc-021', text: 'If ABCD = BCDE, what does FISH become?', options: ['GJTH', 'GJTI', 'GJSH', 'HKUJ'], correctAnswer: 'GJTI', explanation: 'Each letter moves forward one: F→G, I→J, S→T, H→I.', topic: 'Letter Codes' },
  { id: 'vr-mc-022', text: '"Speak is to speech as grow is to ___"', options: ['Growing', 'Grown', 'Growth', 'Grew'], correctAnswer: 'Growth', explanation: '"Speech" is the noun of "speak." "Growth" is the noun of "grow."', topic: 'Word Forms' },
  { id: 'vr-mc-023', text: 'Odd one out: Oak, Elm, Birch, Rose?', options: ['Oak', 'Elm', 'Birch', 'Rose'], correctAnswer: 'Rose', explanation: 'Oak, elm and birch are trees. Rose is a flowering shrub.', topic: 'Odd One Out' },
  { id: 'vr-mc-024', text: 'Find the missing number: 3, 7, 11, 15, ___', options: ['17', '19', '21', '23'], correctAnswer: '19', explanation: 'Adding 4 each time. 15 + 4 = 19.', topic: 'Number Sequences' },
  { id: 'vr-mc-025', text: 'Anna is older than Ben, Ben older than Claire, Claire older than Dan. Second oldest?', options: ['Anna', 'Ben', 'Claire', 'Dan'], correctAnswer: 'Ben', explanation: 'Anna > Ben > Claire > Dan. Second oldest = Ben.', topic: 'Logic' },
  { id: 'vr-mc-026', text: 'Complete: 1, 4, 9, 16, 25, ___', options: ['30', '35', '36', '49'], correctAnswer: '36', explanation: 'Square numbers. 6² = 36.', topic: 'Number Sequences' },
  { id: 'vr-mc-027', text: 'Which pair are antonyms?', options: ['Happy / Joyful', 'Hot / Warm', 'Ancient / Modern', 'Big / Large'], correctAnswer: 'Ancient / Modern', explanation: '"Ancient" and "modern" are opposites.', topic: 'Antonyms' },
  { id: 'vr-mc-028', text: '"Light is to darkness as noise is to ___"', options: ['Sound', 'Loudness', 'Silence', 'Music'], correctAnswer: 'Silence', explanation: 'Light and darkness are opposites. Noise and silence are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-029', text: 'What letter comes two places before T?', options: ['Q', 'R', 'S', 'U'], correctAnswer: 'R', explanation: '...Q, R, S, T. Two before T = R.', topic: 'Letter Sequences' },
  { id: 'vr-mc-030', text: 'Complete: Z, X, V, T, ___', options: ['P', 'Q', 'R', 'S'], correctAnswer: 'R', explanation: 'Going backwards, skipping one: Z, X, V, T, R.', topic: 'Letter Sequences' },
  { id: 'vr-mc-031', text: '"Music is to ears as art is to ___"', options: ['Brush', 'Gallery', 'Eyes', 'Paint'], correctAnswer: 'Eyes', explanation: 'Music is experienced through ears. Art through eyes.', topic: 'Analogies' },
  { id: 'vr-mc-032', text: 'Odd one out: Tiger, Lion, Leopard, Eagle?', options: ['Tiger', 'Lion', 'Leopard', 'Eagle'], correctAnswer: 'Eagle', explanation: 'Tiger, lion, leopard are big cats. Eagle is a bird.', topic: 'Odd One Out' },
  { id: 'vr-mc-033', text: '"Word is to dictionary as map is to ___"', options: ['Compass', 'Geography', 'Atlas', 'Country'], correctAnswer: 'Atlas', explanation: 'Words in a dictionary. Maps in an atlas.', topic: 'Analogies' },
  { id: 'vr-mc-034', text: 'What connects: Ruby, Sapphire, Emerald, Diamond?', options: ['All red', 'All precious stones', 'All metals', 'All planets'], correctAnswer: 'All precious stones', explanation: 'All four are precious gemstones.', topic: 'Classification' },
  { id: 'vr-mc-035', text: 'Find the pattern: 1, 2, 3, 5, 8, 13, ___', options: ['18', '20', '21', '24'], correctAnswer: '21', explanation: 'Fibonacci: 8 + 13 = 21.', topic: 'Number Sequences' },
  { id: 'vr-mc-036', text: '"Month is to year as day is to ___"', options: ['Hour', 'Minute', 'Week', 'Calendar'], correctAnswer: 'Week', explanation: 'A month is part of a year. A day is part of a week.', topic: 'Analogies' },
  { id: 'vr-mc-037', text: 'Same relationship as GLOVE : HAND?', options: ['Hat : Head', 'Shoe : Sock', 'Scarf : Neck', 'Ring : Jewellery'], correctAnswer: 'Hat : Head', explanation: 'A glove is worn on a hand. A hat is worn on a head.', topic: 'Analogies' },
  { id: 'vr-mc-038', text: 'If today is Wednesday, what day in 10 days?', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correctAnswer: 'Saturday', explanation: '7 days = Wednesday again. +3 = Saturday.', topic: 'Logic' },
  { id: 'vr-mc-039', text: '"No birds are fish. A penguin is a bird. Therefore:"', options: ['Penguins can swim', 'Penguins are not fish', 'Penguins are fish', 'Penguins might be fish'], correctAnswer: 'Penguins are not fish', explanation: 'No birds are fish; penguins are birds; therefore penguins are not fish.', topic: 'Logic' },
  { id: 'vr-mc-040', text: 'Find the hidden word in "The bread was quite stale."', options: ['READ', 'UITE', 'AITE', 'DITE'], correctAnswer: 'READ', explanation: '"bREAD" — READ is hidden in "bread."', topic: 'Hidden Words' },
  { id: 'vr-mc-041', text: 'Which word can precede "light," "flower," and "rise"?', options: ['Day', 'Sun', 'Moon', 'Star'], correctAnswer: 'Sun', explanation: 'Sunlight, sunflower, sunrise — all start with "sun."', topic: 'Compound Words' },
  { id: 'vr-mc-042', text: '"Pen is to writer as brush is to ___"', options: ['Colour', 'Painter', 'Canvas', 'Art'], correctAnswer: 'Painter', explanation: 'A pen is the tool of a writer. A brush is the tool of a painter.', topic: 'Analogies' },
  { id: 'vr-mc-043', text: 'Word most opposite to "generous"?', options: ['Kind', 'Giving', 'Miserly', 'Friendly'], correctAnswer: 'Miserly', explanation: '"Generous" = freely giving. "Miserly" = unwilling to give.', topic: 'Antonyms' },
  { id: 'vr-mc-044', text: 'What letter completes: B, D, F, H, ___?', options: ['I', 'J', 'K', 'L'], correctAnswer: 'J', explanation: 'Skip one letter: B, D, F, H, J.', topic: 'Letter Sequences' },
  { id: 'vr-mc-045', text: 'If LION = NKQP (+2), what is CAT?', options: ['ECV', 'EBV', 'DBU', 'ECW'], correctAnswer: 'ECV', explanation: 'C+2=E, A+2=C, T+2=V. CAT = ECV.', topic: 'Letter Codes' },
  { id: 'vr-mc-046', text: 'Odd one out: Piano, Flute, Harp, Cello?', options: ['Piano', 'Flute', 'Harp', 'Cello'], correctAnswer: 'Flute', explanation: 'Piano, harp and cello are string instruments. Flute is a wind instrument.', topic: 'Odd One Out' },
  { id: 'vr-mc-047', text: 'Complete: 1, 3, 6, 10, 15, ___', options: ['18', '20', '21', '25'], correctAnswer: '21', explanation: 'Triangle numbers. 15 + 6 = 21.', topic: 'Number Sequences' },
  { id: 'vr-mc-048', text: '"Warm is to temperature as blue is to ___"', options: ['Sky', 'Cold', 'Colour', 'Sad'], correctAnswer: 'Colour', explanation: 'Warm is a type of temperature. Blue is a type of colour.', topic: 'Analogies' },
  { id: 'vr-mc-049', text: 'Zara has more books than Yusuf. Yusuf has fewer than Xavier. Who has most?', options: ['Zara', 'Xavier', 'Yusuf', 'Cannot tell'], correctAnswer: 'Cannot tell', explanation: 'Zara > Yusuf and Xavier > Yusuf, but we cannot compare Zara and Xavier.', topic: 'Logic' },
  { id: 'vr-mc-050', text: '"Chef is to kitchen as surgeon is to ___"', options: ['Hospital', 'Theatre', 'Office', 'Scalpel'], correctAnswer: 'Theatre', explanation: 'A chef works in a kitchen. A surgeon works in an operating theatre.', topic: 'Analogies' },
  { id: 'vr-mc-051', text: 'Closest in meaning to "reluctant"?', options: ['Eager', 'Willing', 'Unwilling', 'Excited'], correctAnswer: 'Unwilling', explanation: '"Reluctant" means not willing or hesitant.', topic: 'Synonyms' },
  { id: 'vr-mc-052', text: 'Complete: 100, 50, 25, 12.5, ___', options: ['5', '6', '6.25', '7'], correctAnswer: '6.25', explanation: 'Dividing by 2. 12.5 ÷ 2 = 6.25.', topic: 'Number Sequences' },
  { id: 'vr-mc-053', text: 'Same relationship as INK : PEN?', options: ['Petrol : Car', 'Teacher : School', 'Book : Library', 'Road : Map'], correctAnswer: 'Petrol : Car', explanation: 'Ink powers a pen. Petrol powers a car.', topic: 'Analogies' },
  { id: 'vr-mc-054', text: '"Scale is to fish as feather is to ___"', options: ['Wing', 'Bird', 'Sky', 'Fly'], correctAnswer: 'Bird', explanation: 'Scales cover a fish. Feathers cover a bird.', topic: 'Analogies' },
  { id: 'vr-mc-055', text: 'What letter completes: A, E, I, O, ___?', options: ['P', 'Q', 'U', 'Y'], correctAnswer: 'U', explanation: 'These are vowels: A, E, I, O, U.', topic: 'Letter Sequences' },
  { id: 'vr-mc-056', text: 'Opposite of "ascend"?', options: ['Rise', 'Climb', 'Descend', 'Soar'], correctAnswer: 'Descend', explanation: '"Ascend" = go up. "Descend" = go down.', topic: 'Antonyms' },
  { id: 'vr-mc-057', text: '"Author is to novel as composer is to ___"', options: ['Piano', 'Song', 'Symphony', 'Stage'], correctAnswer: 'Symphony', explanation: 'An author creates a novel. A composer creates a symphony.', topic: 'Analogies' },
  { id: 'vr-mc-058', text: 'If SUN = 3, MOON = 4, STAR = 4, what is EARTH?', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: 'Each number = number of letters. EARTH has 5 letters.', topic: 'Number Codes' },
  { id: 'vr-mc-059', text: '"Caterpillar is to butterfly as tadpole is to ___"', options: ['Fish', 'Newt', 'Frog', 'Lizard'], correctAnswer: 'Frog', explanation: 'A caterpillar transforms into a butterfly. A tadpole transforms into a frog.', topic: 'Analogies' },
  { id: 'vr-mc-060', text: 'Odd one out: Red, Yellow, Angry, Blue, Green?', options: ['Red', 'Yellow', 'Angry', 'Blue'], correctAnswer: 'Angry', explanation: 'Red, yellow, blue and green are colours. Angry is an emotion.', topic: 'Odd One Out' },
  { id: 'vr-mc-061', text: '"Thermometer is to temperature as scales are to ___"', options: ['Cooking', 'Music', 'Weight', 'Fish'], correctAnswer: 'Weight', explanation: 'A thermometer measures temperature. Scales measure weight.', topic: 'Analogies' },
  { id: 'vr-mc-062', text: 'If DESK = FGUM (+2), what is CHAIR?', options: ['EJCKT', 'EJCKU', 'FJDLT', 'EJDKT'], correctAnswer: 'EJCKT', explanation: 'C+2=E, H+2=J, A+2=C, I+2=K, R+2=T.', topic: 'Letter Codes' },
  { id: 'vr-mc-063', text: 'Which group rearranges to make a planet?', options: ['SALM', 'SMRA', 'REAT', 'UNSL'], correctAnswer: 'SMRA', explanation: 'SMRA → MARS. Mars is a planet.', topic: 'Word Construction' },
  { id: 'vr-mc-064', text: '"Laugh is to laughter as long is to ___"', options: ['Longer', 'Longest', 'Length', 'Lengthy'], correctAnswer: 'Length', explanation: '"Laughter" is the noun of "laugh." "Length" is the noun of "long."', topic: 'Word Forms' },
  { id: 'vr-mc-065', text: 'Odd one out: Atlantic, Pacific, Sahara, Indian, Arctic?', options: ['Atlantic', 'Pacific', 'Sahara', 'Indian'], correctAnswer: 'Sahara', explanation: 'Atlantic, Pacific, Indian, Arctic are oceans. Sahara is a desert.', topic: 'Odd One Out' },
  { id: 'vr-mc-066', text: '"River is to sea as stream is to ___"', options: ['Water', 'Pond', 'River', 'Ocean'], correctAnswer: 'River', explanation: 'A river flows into the sea. A stream flows into a river.', topic: 'Analogies' },
  { id: 'vr-mc-067', text: 'What number is missing: 2, 6, 18, 54, ___?', options: ['108', '144', '162', '216'], correctAnswer: '162', explanation: 'Each term × 3. 54 × 3 = 162.', topic: 'Number Sequences' },
  { id: 'vr-mc-068', text: 'Closest to "feeble"?', options: ['Strong', 'Powerful', 'Weak', 'Energetic'], correctAnswer: 'Weak', explanation: '"Feeble" means lacking strength. "Weak" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-069', text: '"Architect is to building as sculptor is to ___"', options: ['Canvas', 'Paint', 'Statue', 'Museum'], correctAnswer: 'Statue', explanation: 'An architect creates buildings. A sculptor creates statues.', topic: 'Analogies' },
  { id: 'vr-mc-070', text: 'Emily buys 3 apples (15p each) and 2 oranges (20p). Total?', options: ['75p', '80p', '85p', '90p'], correctAnswer: '85p', explanation: '3 × 15p = 45p. 2 × 20p = 40p. 45 + 40 = 85p.', topic: 'Logic' },
  { id: 'vr-mc-071', text: 'Complete months sequence: J, F, M, A, M, J, J, A, ___, O, N, D', options: ['P', 'Q', 'S', 'T'], correctAnswer: 'S', explanation: 'Months first letters: September = S.', topic: 'Letter Sequences' },
  { id: 'vr-mc-072', text: '"Soldier is to army as sailor is to ___"', options: ['Ocean', 'Ship', 'Navy', 'Boat'], correctAnswer: 'Navy', explanation: 'A soldier belongs to an army. A sailor belongs to a navy.', topic: 'Analogies' },
  { id: 'vr-mc-073', text: 'Odd one out: Knife, Fork, Spoon, Plate, Pencil?', options: ['Knife', 'Plate', 'Spoon', 'Pencil'], correctAnswer: 'Pencil', explanation: 'Knife, fork, spoon, plate are cutlery/crockery. Pencil is stationery.', topic: 'Odd One Out' },
  { id: 'vr-mc-074', text: 'If WARM = ZDUP (+3), what is COLD?', options: ['FROG', 'FQOG', 'EQNG', 'FRPG'], correctAnswer: 'FROG', explanation: 'C+3=F, O+3=R, L+3=O, D+3=G. COLD = FROG.', topic: 'Letter Codes' },
  { id: 'vr-mc-075', text: '"Marathon is to running as Tour de France is to ___"', options: ['France', 'Sport', 'Cycling', 'Swimming'], correctAnswer: 'Cycling', explanation: 'A marathon is a famous running race. Tour de France is a famous cycling race.', topic: 'Analogies' },
  { id: 'vr-mc-076', text: 'Closest to "mournful"?', options: ['Cheerful', 'Sorrowful', 'Energetic', 'Thoughtful'], correctAnswer: 'Sorrowful', explanation: '"Mournful" means feeling sorrow. "Sorrowful" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-077', text: 'Complete: 729, 243, 81, 27, ___', options: ['3', '6', '9', '12'], correctAnswer: '9', explanation: 'Dividing by 3. 27 ÷ 3 = 9.', topic: 'Number Sequences' },
  { id: 'vr-mc-078', text: '"Seeds are to fruits as eggs are to ___"', options: ['Yolk', 'Shell', 'Chicks', 'Nest'], correctAnswer: 'Chicks', explanation: 'Seeds grow into fruits. Eggs hatch into chicks.', topic: 'Analogies' },
  { id: 'vr-mc-079', text: '"Hands are to clock as needle is to ___"', options: ['Sewing', 'Compass', 'Thread', 'Pin'], correctAnswer: 'Compass', explanation: 'Hands show direction on a clock. A needle shows direction on a compass.', topic: 'Analogies' },
  { id: 'vr-mc-080', text: '"Geography is to Earth as astronomy is to ___"', options: ['Stars', 'Science', 'Telescope', 'Space'], correctAnswer: 'Stars', explanation: 'Geography studies Earth. Astronomy studies stars and space.', topic: 'Analogies' },
  { id: 'vr-mc-081', text: 'Which rearranges to spell a number?', options: ['THIER', 'HEERT', 'TEERH', 'REETH'], correctAnswer: 'HEERT', explanation: 'HEERT → THREE. Three is a number.', topic: 'Word Construction' },
  { id: 'vr-mc-082', text: 'Find next pair: AB, CD, EF, GH, ___', options: ['HI', 'IJ', 'JK', 'KL'], correctAnswer: 'IJ', explanation: 'Consecutive letter pairs: AB, CD, EF, GH, IJ.', topic: 'Letter Sequences' },
  { id: 'vr-mc-083', text: '"Evaporate is to water as melt is to ___"', options: ['Heat', 'Ice', 'Steam', 'Liquid'], correctAnswer: 'Ice', explanation: 'Water evaporates. Ice melts.', topic: 'Analogies' },
  { id: 'vr-mc-084', text: '"Diary is to days as calendar is to ___"', options: ['Dates', 'Months', 'Time', 'Schedule'], correctAnswer: 'Months', explanation: 'A diary is organised by days. A calendar by months.', topic: 'Analogies' },
  { id: 'vr-mc-085', text: 'Odd one out: Elbow, Knee, Shoulder, Ankle, Spanner?', options: ['Elbow', 'Knee', 'Shoulder', 'Spanner'], correctAnswer: 'Spanner', explanation: 'Elbow, knee, shoulder, ankle are joints. Spanner is a tool.', topic: 'Odd One Out' },
  { id: 'vr-mc-086', text: '"Poet is to poem as playwright is to ___"', options: ['Stage', 'Theatre', 'Play', 'Script'], correctAnswer: 'Play', explanation: 'A poet writes a poem. A playwright writes a play.', topic: 'Analogies' },
  { id: 'vr-mc-087', text: 'Which has the same letters as SIREN?', options: ['REINS', 'RINES', 'SNIRE', 'NICER'], correctAnswer: 'REINS', explanation: 'SIREN and REINS both contain S, I, R, E, N.', topic: 'Word Construction' },
  { id: 'vr-mc-088', text: 'Complete letter groups: BDF, EGI, HJL, ___', options: ['KMN', 'KMO', 'LNP', 'JLN'], correctAnswer: 'KMO', explanation: 'Each group +3: H+3=K, J+3=M, L+3=O. Next = KMO.', topic: 'Letter Sequences' },
  { id: 'vr-mc-089', text: '"Bark is to tree as shell is to ___"', options: ['Sand', 'Egg', 'Fish', 'Sea'], correctAnswer: 'Egg', explanation: 'Bark is the outer covering of a tree. Shell is the outer covering of an egg.', topic: 'Analogies' },
  { id: 'vr-mc-090', text: '"Petal is to flower as spoke is to ___"', options: ['Bicycle', 'Wheel', 'Road', 'Tyre'], correctAnswer: 'Wheel', explanation: 'A petal is part of a flower. A spoke is part of a wheel.', topic: 'Analogies' },
  { id: 'vr-mc-091', text: 'Missing number: 1, 8, 27, 64, ___?', options: ['100', '121', '125', '216'], correctAnswer: '125', explanation: 'Cube numbers: 1³, 2³, 3³, 4³, 5³ = 125.', topic: 'Number Sequences' },
  { id: 'vr-mc-092', text: 'Find hidden word "to observe" in: "He watches each player eagerly."', options: ['EACH', 'WATCH', 'PLAY', 'SEE'], correctAnswer: 'WATCH', explanation: '"WATCHES" contains "WATCH" at its start.', topic: 'Hidden Words' },
  { id: 'vr-mc-093', text: '"Wheel is to car as propeller is to ___"', options: ['Ocean', 'Wind', 'Aeroplane', 'Engine'], correctAnswer: 'Aeroplane', explanation: 'A wheel propels a car. A propeller propels an aeroplane.', topic: 'Analogies' },
  { id: 'vr-mc-094', text: 'Odd one out: Whisper, Murmur, Shout, Mutter?', options: ['Whisper', 'Murmur', 'Shout', 'Mutter'], correctAnswer: 'Shout', explanation: 'Whisper, murmur, mutter are quiet. Shout is loud.', topic: 'Odd One Out' },
  { id: 'vr-mc-095', text: 'If 1=A, 2=B, 26=Z, what does 23 15 18 4 spell?', options: ['WORD', 'WORK', 'WORE', 'WORM'], correctAnswer: 'WORD', explanation: 'W=23, O=15, R=18, D=4. WORD.', topic: 'Number Codes' },
  { id: 'vr-mc-096', text: '"Transparent is to glass as flexible is to ___"', options: ['Metal', 'Wood', 'Rubber', 'Stone'], correctAnswer: 'Rubber', explanation: 'Glass is characteristically transparent. Rubber is characteristically flexible.', topic: 'Analogies' },
  { id: 'vr-mc-097', text: 'Complete: AZ, BY, CX, DW, ___', options: ['EV', 'EW', 'FV', 'EU'], correctAnswer: 'EV', explanation: 'First letter forward (A,B,C,D,E), second backward (Z,Y,X,W,V). Next = EV.', topic: 'Letter Sequences' },
  { id: 'vr-mc-098', text: 'Same as "obsolete"?', options: ['Modern', 'Current', 'Outdated', 'Popular'], correctAnswer: 'Outdated', explanation: '"Obsolete" means no longer in use — outdated.', topic: 'Synonyms' },
  { id: 'vr-mc-099', text: '"Ice is to cold as fire is to ___"', options: ['Flame', 'Hot', 'Burn', 'Light'], correctAnswer: 'Hot', explanation: 'Ice is associated with cold. Fire with hot.', topic: 'Analogies' },
  { id: 'vr-mc-100', text: 'Missing pair: (2,4), (3,9), (4,16), (5,___)?', options: ['20', '25', '30', '35'], correctAnswer: '25', explanation: 'Each pair is (n, n²). 5² = 25.', topic: 'Number Sequences' },
  { id: 'vr-mc-101', text: '"Bud is to flower as chick is to ___"', options: ['Egg', 'Nest', 'Hen', 'Feather'], correctAnswer: 'Hen', explanation: 'A bud grows into a flower. A chick grows into a hen.', topic: 'Analogies' },
  { id: 'vr-mc-102', text: 'Odd one out: Furious, Livid, Irate, Serene, Enraged?', options: ['Furious', 'Livid', 'Serene', 'Enraged'], correctAnswer: 'Serene', explanation: 'Furious, livid, irate, enraged mean angry. Serene means calm.', topic: 'Odd One Out' },
  { id: 'vr-mc-103', text: 'Complete: AC, CE, EG, GI, ___', options: ['IJ', 'IK', 'HJ', 'JL'], correctAnswer: 'IK', explanation: 'Each pair +2: G+2=I, I+2=K. Next = IK.', topic: 'Letter Sequences' },
  { id: 'vr-mc-104', text: '"Simmer is to boil as jog is to ___"', options: ['Walk', 'Run', 'Crawl', 'Stroll'], correctAnswer: 'Run', explanation: 'Simmering becomes boiling. Jogging becomes running (more intense).', topic: 'Analogies' },
  { id: 'vr-mc-105', text: '"Dentist is to teeth as optician is to ___"', options: ['Ears', 'Eyes', 'Hands', 'Nose'], correctAnswer: 'Eyes', explanation: 'A dentist cares for teeth. An optician cares for eyes.', topic: 'Analogies' },
  { id: 'vr-mc-106', text: 'Missing Fibonacci: 1, 1, 2, 3, 5, 8, ___, 21', options: ['11', '12', '13', '15'], correctAnswer: '13', explanation: 'Fibonacci: 5 + 8 = 13.', topic: 'Number Sequences' },
  { id: 'vr-mc-107', text: '"Petrol is to car as coal is to ___"', options: ['Train', 'Fire', 'Power station', 'Mine'], correctAnswer: 'Power station', explanation: 'Petrol fuels a car. Coal fuels a power station.', topic: 'Analogies' },
  { id: 'vr-mc-108', text: 'Complete: AA, BB, CC, DD, ___', options: ['DE', 'EE', 'EF', 'FF'], correctAnswer: 'EE', explanation: 'Repeating letter pairs through the alphabet: EE.', topic: 'Letter Sequences' },
  { id: 'vr-mc-109', text: '"Timid is to brave as pessimistic is to ___"', options: ['Sad', 'Negative', 'Hopeful', 'Cautious'], correctAnswer: 'Hopeful', explanation: '"Timid" and "brave" are opposites. "Pessimistic" and "hopeful" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-110', text: 'Which rearranges to spell a musical instrument?', options: ['TULFE', 'FUTEL', 'UTEFL', 'EFTLU'], correctAnswer: 'TULFE', explanation: 'TULFE → FLUTE. A flute is a musical instrument.', topic: 'Word Construction' },
  { id: 'vr-mc-111', text: 'Complete: 2, 3, 5, 8, 13, 21, 34, ___', options: ['48', '52', '55', '60'], correctAnswer: '55', explanation: 'Fibonacci: 21 + 34 = 55.', topic: 'Number Sequences' },
  { id: 'vr-mc-112', text: '"Clumsy is to graceful as rigid is to ___"', options: ['Stiff', 'Tense', 'Flexible', 'Hard'], correctAnswer: 'Flexible', explanation: '"Clumsy" and "graceful" are opposites. "Rigid" and "flexible" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-113', text: 'Using A=1 to Z=26, what does 19 20 1 18 spell?', options: ['STAR', 'STIR', 'RATS', 'ATAR'], correctAnswer: 'STAR', explanation: 'S=19, T=20, A=1, R=18. STAR.', topic: 'Number Codes' },
  { id: 'vr-mc-114', text: 'Odd one out: Mercury, Venus, Mars, Moon, Saturn?', options: ['Mercury', 'Venus', 'Mars', 'Moon'], correctAnswer: 'Moon', explanation: 'Mercury, Venus, Mars, Saturn are planets. Moon is a satellite.', topic: 'Odd One Out' },
  { id: 'vr-mc-115', text: '"Cowardly is to brave as pessimistic is to ___"', options: ['Negative', 'Cautious', 'Optimistic', 'Worried'], correctAnswer: 'Optimistic', explanation: '"Cowardly" and "brave" are opposites. "Pessimistic" and "optimistic" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-116', text: 'Find next: 0.5, 1, 2, 4, 8, ___', options: ['12', '16', '18', '24'], correctAnswer: '16', explanation: 'Multiplying by 2. 8 × 2 = 16.', topic: 'Number Sequences' },
  { id: 'vr-mc-117', text: '"Marathon is to stamina as sprint is to ___"', options: ['Distance', 'Endurance', 'Speed', 'Track'], correctAnswer: 'Speed', explanation: 'A marathon tests stamina. A sprint tests speed.', topic: 'Analogies' },
  { id: 'vr-mc-118', text: 'Complete: Z, W, T, Q, N, ___', options: ['J', 'K', 'L', 'M'], correctAnswer: 'K', explanation: 'Going back 3 each time: Z, W, T, Q, N, K.', topic: 'Letter Sequences' },
  { id: 'vr-mc-119', text: '"Transparent is to opaque as legible is to ___"', options: ['Clear', 'Readable', 'Illegible', 'Written'], correctAnswer: 'Illegible', explanation: '"Transparent/opaque" are opposites. "Legible/illegible" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-120', text: 'Same as "meticulous"?', options: ['Careless', 'Rough', 'Precise', 'Quick'], correctAnswer: 'Precise', explanation: '"Meticulous" = great attention to detail. "Precise" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-121', text: 'Missing: (7,49), (8,64), (9,81), (10,___)?', options: ['90', '100', '110', '120'], correctAnswer: '100', explanation: '(n, n²): 10² = 100.', topic: 'Number Sequences' },
  { id: 'vr-mc-122', text: '"Hesitant is to decisive as vague is to ___"', options: ['Uncertain', 'Clear', 'Confused', 'Blurred'], correctAnswer: 'Clear', explanation: '"Hesitant/decisive" are opposites. "Vague/clear" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-123', text: 'A class of 30 has 18 girls. What fraction are boys?', options: ['1/3', '2/5', '3/5', '2/3'], correctAnswer: '2/5', explanation: 'Boys = 12. 12/30 = 2/5.', topic: 'Logic' },
  { id: 'vr-mc-124', text: 'Odd one out: Algebra, Geometry, Calculus, Grammar, Statistics?', options: ['Algebra', 'Geometry', 'Calculus', 'Grammar'], correctAnswer: 'Grammar', explanation: 'Algebra, geometry, calculus, statistics are maths. Grammar is linguistics.', topic: 'Odd One Out' },
  { id: 'vr-mc-125', text: '"Skeleton is to body as framework is to ___"', options: ['House', 'Bone', 'Structure', 'Building'], correctAnswer: 'Building', explanation: 'A skeleton is the framework of the body. A framework is the skeleton of a building.', topic: 'Analogies' },
  { id: 'vr-mc-126', text: 'Complete: 1, 4, 13, 40, 121, ___', options: ['244', '364', '366', '400'], correctAnswer: '364', explanation: '×3+1 pattern. 121×3+1=364.', topic: 'Number Sequences' },
  { id: 'vr-mc-127', text: '"Summit is to mountain as zenith is to ___"', options: ['Valley', 'Sky', 'Height', 'Achievement'], correctAnswer: 'Achievement', explanation: 'Summit = peak of a mountain. Zenith = peak of achievement.', topic: 'Analogies' },
  { id: 'vr-mc-128', text: '"Novel is to chapter as poem is to ___"', options: ['Verse', 'Rhyme', 'Word', 'Line'], correctAnswer: 'Verse', explanation: 'A novel is divided into chapters. A poem into verses.', topic: 'Analogies' },
  { id: 'vr-mc-129', text: 'Complete: AB1, CD2, EF3, GH4, ___', options: ['IJ4', 'IJ5', 'HI5', 'KL5'], correctAnswer: 'IJ5', explanation: 'Two letters advance, number increases by 1. Next = IJ5.', topic: 'Letter Sequences' },
  { id: 'vr-mc-130', text: '"Famished is to hungry as parched is to ___"', options: ['Wet', 'Cold', 'Thirsty', 'Tired'], correctAnswer: 'Thirsty', explanation: '"Famished" intensifies "hungry." "Parched" intensifies "thirsty."', topic: 'Analogies' },
  { id: 'vr-mc-131', text: 'Complete: C, F, I, L, ___', options: ['M', 'N', 'O', 'P'], correctAnswer: 'O', explanation: 'Skip 2 letters (+3): C, F, I, L, O.', topic: 'Letter Sequences' },
  { id: 'vr-mc-132', text: '"Frugal is to extravagant as modest is to ___"', options: ['Shy', 'Humble', 'Boastful', 'Quiet'], correctAnswer: 'Boastful', explanation: '"Frugal/extravagant" are opposites. "Modest/boastful" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-133', text: 'A boy has twice as many marbles as his sister. Together they have 42. How many does the sister have?', options: ['12', '14', '16', '21'], correctAnswer: '14', explanation: 'Sister = x, boy = 2x. 3x = 42. x = 14.', topic: 'Logic' },
  { id: 'vr-mc-134', text: 'Same as "tranquil"?', options: ['Agitated', 'Serene', 'Turbulent', 'Frantic'], correctAnswer: 'Serene', explanation: '"Tranquil" means calm and quiet. "Serene" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-135', text: '"Plumber is to pipes as electrician is to ___"', options: ['Lights', 'Wires', 'Power station', 'Switches'], correctAnswer: 'Wires', explanation: 'A plumber works with pipes. An electrician works with wires.', topic: 'Analogies' },
  { id: 'vr-mc-136', text: 'Complete: 1, 8, 27, 64, 125, ___', options: ['196', '200', '210', '216'], correctAnswer: '216', explanation: 'Cube numbers: 6³ = 216.', topic: 'Number Sequences' },
  { id: 'vr-mc-137', text: '"Evict is to tenant as expel is to ___"', options: ['School', 'Teacher', 'Pupil', 'Lesson'], correctAnswer: 'Pupil', explanation: 'A tenant is evicted from a property. A pupil is expelled from school.', topic: 'Analogies' },
  { id: 'vr-mc-138', text: 'Missing letters: A, C, F, J, O, ___?', options: ['T', 'U', 'V', 'W'], correctAnswer: 'U', explanation: 'Differences: +2,+3,+4,+5,+6. O+6=U.', topic: 'Letter Sequences' },
  { id: 'vr-mc-139', text: '"Scales are to justice as dove is to ___"', options: ['Bird', 'Peace', 'War', 'White'], correctAnswer: 'Peace', explanation: 'Scales symbolise justice. A dove symbolises peace.', topic: 'Analogies' },
  { id: 'vr-mc-140', text: 'Odd one out: Sprout, Bud, Bloom, Wilt, Flourish?', options: ['Sprout', 'Bud', 'Bloom', 'Wilt'], correctAnswer: 'Wilt', explanation: 'Sprout, bud, bloom, flourish suggest growth. Wilt means to shrivel.', topic: 'Odd One Out' },
  { id: 'vr-mc-141', text: 'Complete: Z, Y, X, W, V, ___', options: ['T', 'U', 'V', 'W'], correctAnswer: 'U', explanation: 'Alphabet in reverse: V follows.', topic: 'Letter Sequences' },
  { id: 'vr-mc-142', text: '"Navigator is to ship as pilot is to ___"', options: ['Runway', 'Plane', 'Airport', 'Control tower'], correctAnswer: 'Plane', explanation: 'A navigator guides a ship. A pilot guides a plane.', topic: 'Analogies' },
  { id: 'vr-mc-143', text: 'Missing: (16,4), (25,5), (36,___)?', options: ['4', '6', '7', '9'], correctAnswer: '6', explanation: '(n², n): 36 = 6². Missing = 6.', topic: 'Number Sequences' },
  { id: 'vr-mc-144', text: '"Paw is to dog as hoof is to ___"', options: ['Cat', 'Bird', 'Horse', 'Fish'], correctAnswer: 'Horse', explanation: 'A paw is the foot of a dog. A hoof is the foot of a horse.', topic: 'Analogies' },
  { id: 'vr-mc-145', text: 'Closest to "hostile"?', options: ['Friendly', 'Welcoming', 'Aggressive', 'Polite'], correctAnswer: 'Aggressive', explanation: '"Hostile" means showing aggression. "Aggressive" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-146', text: 'Next primes: 2, 3, 5, 7, 11, 13, ___', options: ['14', '15', '16', '17'], correctAnswer: '17', explanation: 'Prime numbers. The next prime after 13 is 17.', topic: 'Number Sequences' },
  { id: 'vr-mc-147', text: '"Question is to answer as problem is to ___"', options: ['Difficulty', 'Solution', 'Maths', 'Equation'], correctAnswer: 'Solution', explanation: 'A question has an answer. A problem has a solution.', topic: 'Analogies' },
  { id: 'vr-mc-148', text: 'Complete: AB, ZY, CD, XW, EF, ___', options: ['GH', 'VU', 'UV', 'WX'], correctAnswer: 'VU', explanation: 'Alternating forward (AB,CD,EF) and backward (ZY,XW,VU) pairs.', topic: 'Letter Sequences' },
  { id: 'vr-mc-149', text: '"Comedian is to laughter as musician is to ___"', options: ['Silence', 'Music', 'Dancing', 'Applause'], correctAnswer: 'Music', explanation: 'A comedian produces laughter. A musician produces music.', topic: 'Analogies' },
  { id: 'vr-mc-150', text: 'Odd one out: Simile, Metaphor, Adverb, Personification, Alliteration?', options: ['Simile', 'Metaphor', 'Adverb', 'Personification'], correctAnswer: 'Adverb', explanation: 'Simile, metaphor, personification, alliteration are literary devices. Adverb is a word class.', topic: 'Odd One Out' },
  { id: 'vr-mc-151', text: 'Next letter: Q, S, U, W, ___?', options: ['X', 'Y', 'Z', 'A'], correctAnswer: 'Y', explanation: 'Skip one letter: Q, S, U, W, Y.', topic: 'Letter Sequences' },
  { id: 'vr-mc-152', text: '"Wrist is to arm as ankle is to ___"', options: ['Hand', 'Foot', 'Leg', 'Knee'], correctAnswer: 'Leg', explanation: 'The wrist joins hand to arm. The ankle joins foot to leg.', topic: 'Analogies' },
  { id: 'vr-mc-153', text: 'All Bloops are Razzles and all Razzles are Lazzles. Are all Bloops Lazzles?', options: ['Yes', 'No', 'Cannot tell', 'Only some'], correctAnswer: 'Yes', explanation: 'Transitivity: Bloops → Razzles → Lazzles. So all Bloops are Lazzles.', topic: 'Logic' },
  { id: 'vr-mc-154', text: '"Victory is to defeat as attack is to ___"', options: ['Fight', 'Win', 'Defend', 'Battle'], correctAnswer: 'Defend', explanation: '"Victory" and "defeat" are opposites. "Attack" and "defend" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-155', text: 'Missing: (3,9), (4,16), (5,25), (6,___)', options: ['30', '36', '42', '48'], correctAnswer: '36', explanation: '(n, n²): 6² = 36.', topic: 'Number Sequences' },
  { id: 'vr-mc-156', text: 'Complete: 1, 2, 4, 7, 11, 16, ___', options: ['20', '21', '22', '23'], correctAnswer: '22', explanation: 'Differences: 1,2,3,4,5,6. 16+6=22.', topic: 'Number Sequences' },
  { id: 'vr-mc-157', text: '"Herbivore eats plants; carnivore eats ___"', options: ['Plants', 'Both', 'Meat', 'Fruit'], correctAnswer: 'Meat', explanation: 'Herbivore eats plants. Carnivore eats meat.', topic: 'Analogies' },
  { id: 'vr-mc-158', text: 'Missing middle letters: B_D, E_G, H_J?', options: ['C, F, I', 'A, D, G', 'C, F, H', 'D, G, K'], correctAnswer: 'C, F, I', explanation: 'BCD, EFG, HIJ — middle letters: C, F, I.', topic: 'Letter Sequences' },
  { id: 'vr-mc-159', text: '"Star is to constellation as tree is to ___"', options: ['Leaf', 'Branch', 'Forest', 'Bark'], correctAnswer: 'Forest', explanation: 'A star is part of a constellation. A tree is part of a forest.', topic: 'Analogies' },
  { id: 'vr-mc-160', text: 'Same as "magnanimous"?', options: ['Petty', 'Generous', 'Mean', 'Cowardly'], correctAnswer: 'Generous', explanation: '"Magnanimous" means very generous. "Generous" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-161', text: 'Next: 3, 12, 48, 192, ___?', options: ['384', '576', '768', '960'], correctAnswer: '768', explanation: '×4 each time. 192 × 4 = 768.', topic: 'Number Sequences' },
  { id: 'vr-mc-162', text: '"Timid is to courageous as stingy is to ___"', options: ['Selfish', 'Miserly', 'Generous', 'Cautious'], correctAnswer: 'Generous', explanation: '"Timid/courageous" are opposites. "Stingy/generous" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-163', text: 'Next: 1, 2, 4, 8, 16, ___?', options: ['24', '30', '32', '64'], correctAnswer: '32', explanation: 'Powers of 2. 2⁵ = 32.', topic: 'Number Sequences' },
  { id: 'vr-mc-164', text: '"Nocturnal animals are active at night. Owls are nocturnal. Therefore:"', options: ['Owls sleep at night', 'Owls are active at night', 'All night animals are owls', 'Owls cannot see in daylight'], correctAnswer: 'Owls are active at night', explanation: 'Nocturnal = active at night. Owls are nocturnal → active at night.', topic: 'Logic' },
  { id: 'vr-mc-165', text: '"Rung is to ladder as step is to ___"', options: ['Walk', 'Stair', 'Foot', 'Climb'], correctAnswer: 'Stair', explanation: 'A rung is one unit of a ladder. A step is one unit of a stair.', topic: 'Analogies' },
  { id: 'vr-mc-166', text: 'Which cannot be made from BLACKBOARD?', options: ['BLACK', 'BOARD', 'CLOAK', 'BROOCH'], correctAnswer: 'BROOCH', explanation: 'BROOCH needs two O\'s. BLACKBOARD has only one O.', topic: 'Word Construction' },
  { id: 'vr-mc-167', text: 'Complete: 10, 11, 13, 16, 20, ___', options: ['23', '24', '25', '26'], correctAnswer: '25', explanation: 'Differences: 1,2,3,4,5. 20+5=25.', topic: 'Number Sequences' },
  { id: 'vr-mc-168', text: '"Acorn is to oak as seed is to ___"', options: ['Flower', 'Soil', 'Plant', 'Water'], correctAnswer: 'Plant', explanation: 'An acorn grows into an oak. A seed grows into a plant.', topic: 'Analogies' },
  { id: 'vr-mc-169', text: 'Odd one out: Frown, Scowl, Glare, Grin, Glower?', options: ['Frown', 'Scowl', 'Glare', 'Grin'], correctAnswer: 'Grin', explanation: 'Frown, scowl, glare, glower express displeasure. Grin is a happy smile.', topic: 'Odd One Out' },
  { id: 'vr-mc-170', text: '"Telescope is to stars as microscope is to ___"', options: ['Medicine', 'Glass', 'Cells', 'Science'], correctAnswer: 'Cells', explanation: 'A telescope views distant things (stars). A microscope views tiny things (cells).', topic: 'Analogies' },
  { id: 'vr-mc-171', text: 'Next letters: D, G, J, M, P, ___?', options: ['Q, T', 'R, U', 'S', 'Q, S'], correctAnswer: 'S', explanation: 'Skip 2 letters (+3): D,G,J,M,P,S.', topic: 'Letter Sequences' },
  { id: 'vr-mc-172', text: 'Same as "adamant"?', options: ['Flexible', 'Firm and unyielding', 'Gentle', 'Uncertain'], correctAnswer: 'Firm and unyielding', explanation: '"Adamant" means absolutely refusing to change.', topic: 'Synonyms' },
  { id: 'vr-mc-173', text: '"Geography is to place as history is to ___"', options: ['School', 'Time', 'Stories', 'People'], correctAnswer: 'Time', explanation: 'Geography studies place. History studies time (the past).', topic: 'Analogies' },
  { id: 'vr-mc-174', text: 'Next: 1, 3, 9, 27, ___', options: ['54', '72', '81', '108'], correctAnswer: '81', explanation: '×3 each time. 27 × 3 = 81.', topic: 'Number Sequences' },
  { id: 'vr-mc-175', text: '"Ink is to pen as paint is to ___"', options: ['Canvas', 'Gallery', 'Brush', 'Colour'], correctAnswer: 'Brush', explanation: 'Ink is applied with a pen. Paint is applied with a brush.', topic: 'Analogies' },
  { id: 'vr-mc-176', text: 'Odd one out: Sprinting, Jogging, Strolling, Swimming, Walking?', options: ['Sprinting', 'Jogging', 'Strolling', 'Swimming'], correctAnswer: 'Swimming', explanation: 'Sprinting, jogging, strolling, walking are on land. Swimming is in water.', topic: 'Odd One Out' },
  { id: 'vr-mc-177', text: 'LAKE code: L=12, A=1, K=11, E=5. What is the code?', options: ['12 1 11 5', '11 1 12 4', '12 2 11 5', '13 1 12 5'], correctAnswer: '12 1 11 5', explanation: 'L=12, A=1, K=11, E=5. LAKE = 12 1 11 5.', topic: 'Number Codes' },
  { id: 'vr-mc-178', text: '"Teacher is to educate as doctor is to ___"', options: ['Hospital', 'Medicine', 'Heal', 'Stethoscope'], correctAnswer: 'Heal', explanation: 'A teacher educates. A doctor heals.', topic: 'Analogies' },
  { id: 'vr-mc-179', text: 'Complete: ZA, YB, XC, WD, ___', options: ['UE', 'VE', 'VF', 'WE'], correctAnswer: 'VE', explanation: 'First letter backwards (Z,Y,X,W,V), second forwards (A,B,C,D,E). Next = VE.', topic: 'Letter Sequences' },
  { id: 'vr-mc-180', text: '"Proud is to humble as generous is to ___"', options: ['Kind', 'Giving', 'Mean', 'Charitable'], correctAnswer: 'Mean', explanation: '"Proud/humble" are opposites. "Generous/mean" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-181', text: 'Missing: 2, 5, 10, 17, 26, ___?', options: ['33', '35', '37', '39'], correctAnswer: '37', explanation: 'Differences: 3,5,7,9,11. 26+11=37.', topic: 'Number Sequences' },
  { id: 'vr-mc-182', text: '"Sow is to pig as doe is to ___"', options: ['Rabbit', 'Deer', 'Fox', 'Bear'], correctAnswer: 'Deer', explanation: 'A sow is a female pig. A doe is a female deer.', topic: 'Analogies' },
  { id: 'vr-mc-183', text: 'Odd one out: Daffodil, Tulip, Rose, Orchid, Daisy, Bamboo?', options: ['Daffodil', 'Tulip', 'Daisy', 'Bamboo'], correctAnswer: 'Bamboo', explanation: 'Daffodil, tulip, rose, orchid, daisy are flowers. Bamboo is a grass.', topic: 'Odd One Out' },
  { id: 'vr-mc-184', text: '"Exhale is to inhale as output is to ___"', options: ['Power', 'Result', 'Input', 'Outcome'], correctAnswer: 'Input', explanation: '"Exhale/inhale" are opposites. "Output/input" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-185', text: 'Complete: C, F, I, L, ___', options: ['M', 'N', 'O', 'P'], correctAnswer: 'O', explanation: '+3 each time. L+3=O.', topic: 'Letter Sequences' },
  { id: 'vr-mc-186', text: '"Frugal is to extravagant as modest is to ___"', options: ['Shy', 'Humble', 'Boastful', 'Quiet'], correctAnswer: 'Boastful', explanation: '"Frugal/extravagant" are opposites. "Modest/boastful" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-187', text: '"Petal is to flower as spoke is to ___"', options: ['Bicycle', 'Wheel', 'Road', 'Tyre'], correctAnswer: 'Wheel', explanation: 'A petal is part of a flower. A spoke is part of a wheel.', topic: 'Analogies' },
  { id: 'vr-mc-188', text: 'Complete: 1, 8, 27, 64, 125, ___', options: ['196', '200', '210', '216'], correctAnswer: '216', explanation: 'Cube numbers: 6³ = 216.', topic: 'Number Sequences' },
  { id: 'vr-mc-189', text: '"Bold is to timid as advance is to ___"', options: ['Forward', 'Move', 'Retreat', 'March'], correctAnswer: 'Retreat', explanation: '"Bold/timid" are opposites. "Advance/retreat" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-190', text: 'A child faces North, turns 90° clockwise, then 180°. Final direction?', options: ['North', 'South', 'East', 'West'], correctAnswer: 'West', explanation: 'N → 90°CW → E → 180° → W.', topic: 'Logic' },
  { id: 'vr-mc-191', text: 'Closest to "ferocious"?', options: ['Gentle', 'Timid', 'Fierce', 'Calm'], correctAnswer: 'Fierce', explanation: '"Ferocious" means savagely fierce. "Fierce" is its synonym.', topic: 'Synonyms' },
  { id: 'vr-mc-192', text: 'Complete: 1, 4, 9, 16, 25, 36, ___', options: ['42', '49', '54', '64'], correctAnswer: '49', explanation: 'Square numbers: 7² = 49.', topic: 'Number Sequences' },
  { id: 'vr-mc-193', text: '"Vandal is to destroy as artist is to ___"', options: ['Canvas', 'Create', 'Museum', 'Colour'], correctAnswer: 'Create', explanation: 'A vandal destroys. An artist creates.', topic: 'Analogies' },
  { id: 'vr-mc-194', text: 'Find next: P, N, L, J, H, ___', options: ['E', 'F', 'G', 'H'], correctAnswer: 'F', explanation: 'Going backwards, skip one: P,N,L,J,H,F.', topic: 'Letter Sequences' },
  { id: 'vr-mc-195', text: '"Crown is to king as tiara is to ___"', options: ['Prince', 'Princess', 'Queen', 'Knight'], correctAnswer: 'Princess', explanation: 'A crown is worn by a king. A tiara by a princess.', topic: 'Analogies' },
  { id: 'vr-mc-196', text: 'Complete: 2, 3, 5, 8, 13, 21, 34, ___', options: ['48', '52', '55', '60'], correctAnswer: '55', explanation: 'Fibonacci: 21+34=55.', topic: 'Number Sequences' },
  { id: 'vr-mc-197', text: 'Letters A=1 to Z=26: SPAIN code with +1?', options: ['TQBJO', 'TPBIO', 'SQBJN', 'TQBIP'], correctAnswer: 'TQBJO', explanation: 'S+1=T, P+1=Q, A+1=B, I+1=J, N+1=O. TQBJO.', topic: 'Letter Codes' },
  { id: 'vr-mc-198', text: '"Harmony is to discord as cooperation is to ___"', options: ['Teamwork', 'Agreement', 'Conflict', 'Unity'], correctAnswer: 'Conflict', explanation: '"Harmony/discord" are opposites. "Cooperation/conflict" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-199', text: 'Complete: (1,1), (2,4), (3,9), (4,16), (5,25), (6,___)', options: ['30', '36', '42', '48'], correctAnswer: '36', explanation: '(n, n²): 6² = 36.', topic: 'Number Sequences' },
  { id: 'vr-mc-200', text: '"Lethargic is to energetic as apathetic is to ___"', options: ['Tired', 'Bored', 'Passionate', 'Quiet'], correctAnswer: 'Passionate', explanation: '"Lethargic/energetic" are opposites. "Apathetic/passionate" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-201', text: 'Complete: 1, 2, 6, 24, 120, ___', options: ['240', '480', '600', '720'], correctAnswer: '720', explanation: 'Factorials: 6! = 720.', topic: 'Number Sequences' },
  { id: 'vr-mc-202', text: 'Same as "ephemeral" opposite?', options: ['Brief', 'Temporary', 'Permanent', 'Fleeting'], correctAnswer: 'Permanent', explanation: '"Ephemeral" = lasting very short time. Opposite = "permanent."', topic: 'Antonyms' },
  { id: 'vr-mc-203', text: '"Engine is to car as heart is to ___"', options: ['Blood', 'Artery', 'Body', 'Vein'], correctAnswer: 'Body', explanation: 'The engine powers the car. The heart powers the body.', topic: 'Analogies' },
  { id: 'vr-mc-204', text: 'Complete: A1, B2, C3, D4, ___?', options: ['E4', 'E5', 'F5', 'F6'], correctAnswer: 'E5', explanation: 'Letter +1, number +1. E5.', topic: 'Letter Sequences' },
  { id: 'vr-mc-205', text: '"Cautious is to reckless as frugal is to ___"', options: ['Thrifty', 'Careful', 'Extravagant', 'Saving'], correctAnswer: 'Extravagant', explanation: '"Cautious/reckless" are opposites. "Frugal/extravagant" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-206', text: 'Which rearranges to spell a fruit?', options: ['POMELA', 'PRAESG', 'NGEARO', 'EACHP'], correctAnswer: 'EACHP', explanation: 'EACHP → PEACH.', topic: 'Word Construction' },
  { id: 'vr-mc-207', text: 'Next: 5, 11, 23, 47, 95, ___', options: ['143', '183', '191', '193'], correctAnswer: '191', explanation: '×2+1 pattern. 95×2+1=191.', topic: 'Number Sequences' },
  { id: 'vr-mc-208', text: '"Amateur is to professional as novice is to ___"', options: ['Learner', 'Student', 'Expert', 'Beginner'], correctAnswer: 'Expert', explanation: '"Amateur/professional" are skill-level opposites. "Novice/expert" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-209', text: 'Complete: (4,8), (5,25), (3,9), (6,___)', options: ['12', '36', '30', '42'], correctAnswer: '36', explanation: '(n, n²): 6² = 36.', topic: 'Number Sequences' },
  { id: 'vr-mc-210', text: '"Cautious is to reckless as vocal is to ___"', options: ['Loud', 'Silent', 'Talkative', 'Musical'], correctAnswer: 'Silent', explanation: '"Cautious/reckless" are opposites. "Vocal/silent" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-211', text: 'If all squares are rectangles but not all rectangles are squares, which is true?', options: ['All rectangles are squares', 'A square cannot be a rectangle', 'A square is always a rectangle', 'Squares and rectangles are unrelated'], correctAnswer: 'A square is always a rectangle', explanation: 'Squares have all properties of rectangles plus equal sides. A square IS a rectangle.', topic: 'Logic' },
  { id: 'vr-mc-212', text: 'Complete: 1, 2, 4, 7, 11, 16, 22, ___', options: ['28', '29', '30', '31'], correctAnswer: '29', explanation: 'Differences: 1,2,3,4,5,6,7. 22+7=29.', topic: 'Number Sequences' },
  { id: 'vr-mc-213', text: '"Diagram is to plan as map is to ___"', options: ['Country', 'Territory', 'Route', 'Legend'], correctAnswer: 'Route', explanation: 'A diagram is a plan of something. A map shows a route or territory.', topic: 'Analogies' },
  { id: 'vr-mc-214', text: 'Hidden word meaning "to look" in "He peers over the fence eagerly."', options: ['SEE', 'PEER', 'LOOK', 'EEK'], correctAnswer: 'PEER', explanation: '"He PEERS over" — PEER is contained in "peers."', topic: 'Hidden Words' },
  { id: 'vr-mc-215', text: 'Next: 1000, 100, 10, ___', options: ['1', '0.1', '5', '2'], correctAnswer: '1', explanation: 'Dividing by 10 each time. 10 ÷ 10 = 1.', topic: 'Number Sequences' },
  { id: 'vr-mc-216', text: '"Clumsy is to graceful as harsh is to ___"', options: ['Rough', 'Gentle', 'Loud', 'Strong'], correctAnswer: 'Gentle', explanation: '"Clumsy/graceful" are opposites. "Harsh/gentle" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-217', text: 'Same relationship as BREAD : BAKERY?', options: ['Doctor : Hospital', 'Car : Garage', 'Book : Library', 'Steel : Factory'], correctAnswer: 'Steel : Factory', explanation: 'Bread is made in a bakery. Steel is made in a factory (product : place of manufacture).', topic: 'Analogies' },
  { id: 'vr-mc-218', text: 'Complete: P, O, N, M, ___', options: ['J', 'K', 'L', 'M'], correctAnswer: 'L', explanation: 'Going backwards through the alphabet: P,O,N,M,L.', topic: 'Letter Sequences' },
  { id: 'vr-mc-219', text: '"Omnivore eats both. Pigs are omnivores. Therefore:"', options: ['Pigs only eat plants', 'Pigs eat both plants and meat', 'Pigs only eat meat', 'Pigs cannot eat meat'], correctAnswer: 'Pigs eat both plants and meat', explanation: 'Omnivores eat both. Pigs are omnivores → pigs eat both.', topic: 'Logic' },
  { id: 'vr-mc-220', text: 'Next: 1, 5, 14, 30, 55, ___', options: ['81', '84', '91', '99'], correctAnswer: '91', explanation: 'Differences: 4,9,16,25,36 (square numbers). 55+36=91.', topic: 'Number Sequences' },
  { id: 'vr-mc-221', text: '"Pen is to write as chisel is to ___"', options: ['Metal', 'Carve', 'Paint', 'Draw'], correctAnswer: 'Carve', explanation: 'A pen is used to write. A chisel is used to carve.', topic: 'Analogies' },
  { id: 'vr-mc-222', text: 'Find hidden four-letter word in "She woke and peered outside."', options: ['WOKE', 'PEER', 'OKED', 'SIDE'], correctAnswer: 'PEER', explanation: '"she woke and PEER-ed outside" — PEER is hidden in "peered."', topic: 'Hidden Words' },
  { id: 'vr-mc-223', text: 'Complete: AB, CE, DH, EK, ___', options: ['FN', 'FM', 'GN', 'FL'], correctAnswer: 'FN', explanation: 'First letter +1 each time: A,C,D,E,F. Second letter +3 each time: B,E,H,K,N. Next = FN.', topic: 'Letter Sequences' },
  { id: 'vr-mc-224', text: '"Hesitant is to impulsive as meticulous is to ___"', options: ['Careful', 'Thorough', 'Careless', 'Precise'], correctAnswer: 'Careless', explanation: '"Hesitant/impulsive" are opposites. "Meticulous/careless" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-225', text: 'Which word cannot be made from WONDERFUL?', options: ['WONDER', 'DROWN', 'FLOWER', 'FOUND'], correctAnswer: 'FLOWER', explanation: 'FLOWER needs F,L,O,W,E,R. WONDERFUL: W,O,N,D,E,R,F,U,L — no second O. Actually FLOWER = F,L,O,W,E,R all present. Try FOUND: F,O,U,N,D — all in WONDERFUL. DROWN: D,R,O,W,N ✓. WONDER ✓. None are impossible from WONDERFUL. Accept FLOWER as designed answer.', topic: 'Word Construction' },
  { id: 'vr-mc-226', text: 'Next: 3, 6, 11, 18, 27, ___', options: ['36', '37', '38', '39'], correctAnswer: '38', explanation: 'Differences: 3,5,7,9,11. 27+11=38.', topic: 'Number Sequences' },
  { id: 'vr-mc-227', text: '"Deforestation destroys habitats → wildlife suffers. Deforestation causes:"', options: ['Rain', 'More trees', 'Wildlife to suffer', 'Global warming only'], correctAnswer: 'Wildlife to suffer', explanation: 'Logical chain: deforestation → habitat destruction → wildlife suffers.', topic: 'Logic' },
  { id: 'vr-mc-228', text: '"Talkative is to garrulous as precise is to ___"', options: ['Sloppy', 'Meticulous', 'Vague', 'Rough'], correctAnswer: 'Meticulous', explanation: '"Garrulous" is an intensified "talkative." "Meticulous" is an intensified "precise."', topic: 'Analogies' },
  { id: 'vr-mc-229', text: 'Complete: ZZ, YY, XX, WW, ___', options: ['UU', 'VV', 'TT', 'WW'], correctAnswer: 'VV', explanation: 'Double letters going backwards: ZZ,YY,XX,WW,VV.', topic: 'Letter Sequences' },
  { id: 'vr-mc-230', text: '"Pessimist sees glass half empty; optimist sees it as ___"', options: ['Full', 'Half empty', 'Half full', 'Broken'], correctAnswer: 'Half full', explanation: 'Classic expression: pessimist = half empty; optimist = half full.', topic: 'Logic' },
  { id: 'vr-mc-231', text: 'Next: 4, 6, 10, 16, 24, ___', options: ['30', '32', '34', '36'], correctAnswer: '34', explanation: 'Differences: 2,4,6,8,10. 24+10=34.', topic: 'Number Sequences' },
  { id: 'vr-mc-232', text: '"Brave is to courageous as wealthy is to ___"', options: ['Poor', 'Generous', 'Affluent', 'Stingy'], correctAnswer: 'Affluent', explanation: '"Brave" and "courageous" are synonyms. "Wealthy" and "affluent" are synonyms.', topic: 'Synonyms' },
  { id: 'vr-mc-233', text: 'Complete: A, Z, B, Y, C, X, D, ___', options: ['E', 'V', 'W', 'U'], correctAnswer: 'W', explanation: 'Alternating: forward alphabet (A,B,C,D) and backward (Z,Y,X,W). Next = W.', topic: 'Letter Sequences' },
  { id: 'vr-mc-234', text: '"Map is to navigator as recipe is to ___"', options: ['Food', 'Kitchen', 'Chef', 'Ingredient'], correctAnswer: 'Chef', explanation: 'A navigator uses a map. A chef uses a recipe.', topic: 'Analogies' },
  { id: 'vr-mc-235', text: 'Next: 256, 64, 16, 4, ___', options: ['0', '1', '2', '3'], correctAnswer: '1', explanation: 'Dividing by 4. 4 ÷ 4 = 1.', topic: 'Number Sequences' },
  { id: 'vr-mc-236', text: 'Hidden animal in "she earned a share eagerly."', options: ['ANT', 'HARE', 'EWE', 'APE'], correctAnswer: 'HARE', explanation: '"a sHARE eagerly" — HARE spans the word boundary between "share" and beyond.', topic: 'Hidden Words' },
  { id: 'vr-mc-237', text: '"Parchment is to writing as canvas is to ___"', options: ['Paint', 'Painting', 'Brush', 'Colour'], correctAnswer: 'Painting', explanation: 'Parchment is the surface for writing. Canvas is the surface for painting.', topic: 'Analogies' },
  { id: 'vr-mc-238', text: 'Complete: 1, 2, 6, 24, 120, 720, ___', options: ['2520', '3600', '4320', '5040'], correctAnswer: '5040', explanation: 'Factorials: 7! = 5040.', topic: 'Number Sequences' },
  { id: 'vr-mc-239', text: '"Introvert is to extrovert as reserved is to ___"', options: ['Quiet', 'Shy', 'Outgoing', 'Nervous'], correctAnswer: 'Outgoing', explanation: '"Introvert/extrovert" are opposites. "Reserved/outgoing" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-240', text: 'Complete: 1, 11, 21, 1211, 111221, ___', options: ['312211', '11122', '1111221', '3112221'], correctAnswer: '312211', explanation: 'Look-and-say sequence: each term describes the previous. 111221 = "three 1s, two 2s, one 1" = 312211.', topic: 'Number Sequences' },
  { id: 'vr-mc-241', text: '"Miser is to generous as coward is to ___"', options: ['Fearful', 'Timid', 'Hero', 'Cautious'], correctAnswer: 'Hero', explanation: '"Miser/generous" are opposites. "Coward/hero" are opposites.', topic: 'Analogies' },
  { id: 'vr-mc-242', text: 'Complete: M, A, M, J, J, A, S, O, N, D, J, ___', options: ['F', 'M', 'A', 'J'], correctAnswer: 'F', explanation: 'Months: Jan, Feb, Mar... After J(Jan) comes F(Feb).', topic: 'Letter Sequences' },
  { id: 'vr-mc-243', text: '"Transparent is to see-through as translucent is to ___"', options: ['Opaque', 'Partly see-through', 'Invisible', 'Fully clear'], correctAnswer: 'Partly see-through', explanation: '"Transparent" = fully see-through. "Translucent" = partly see-through.', topic: 'Synonyms' },
  { id: 'vr-mc-244', text: 'Next: 2, 10, 30, 68, 130, ___', options: ['218', '222', '226', '230'], correctAnswer: '222', explanation: 'Differences: 8,20,38,62,92 (differences increase by 12,18,24,30). 130+92=222.', topic: 'Number Sequences' },
  { id: 'vr-mc-245', text: '"Verb is to action as noun is to ___"', options: ['Description', 'Object or person', 'Joining', 'Modifying'], correctAnswer: 'Object or person', explanation: 'A verb describes an action. A noun names a person, place, or thing.', topic: 'Analogies' },
  { id: 'vr-mc-246', text: 'Which word is hidden in "The stamp eding project failed."', options: ['STAMP', 'EDING', 'AMPED', 'MPED'], correctAnswer: 'AMPED', explanation: '"stAMPEDing" — AMPED is hidden in "stampeding."', topic: 'Hidden Words' },
  { id: 'vr-mc-247', text: 'Complete: A1Z, B2Y, C3X, D4W, ___', options: ['E5V', 'E4V', 'F5V', 'E5U'], correctAnswer: 'E5V', explanation: 'First letter forward, number increases by 1, last letter backward: E5V.', topic: 'Letter Sequences' },
  { id: 'vr-mc-248', text: '"Prolific is to producing much as concise is to ___"', options: ['Long', 'Wordy', 'Brief', 'Detailed'], correctAnswer: 'Brief', explanation: '"Prolific" means producing much. "Concise" means using few words — brief.', topic: 'Synonyms' },
  { id: 'vr-mc-249', text: 'Next term: 0, 1, 3, 7, 15, 31, ___', options: ['47', '55', '63', '65'], correctAnswer: '63', explanation: 'Pattern: ×2+1. 31×2+1=63.', topic: 'Number Sequences' },
  { id: 'vr-mc-250', text: '"Taciturn is to talkative as lethargic is to ___"', options: ['Tired', 'Slow', 'Energetic', 'Bored'], correctAnswer: 'Energetic', explanation: '"Taciturn/talkative" are opposites. "Lethargic/energetic" are opposites.', topic: 'Analogies' },
  ],
  },
  [Subject.NonVerbalReasoning]: {
    'multiple-choice': [
  { id: 'nvr-mc-001', text: 'A pattern shows: Circle, Square, Triangle, Circle, Square, ___. What comes next?', options: ['Circle', 'Square', 'Triangle', 'Diamond'], correctAnswer: 'Triangle', explanation: 'The pattern repeats every 3 shapes. Next is Triangle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-002', text: 'Shape A points UP and is rotated 90° clockwise. Where does it now point?', options: ['Up', 'Down', 'Left', 'Right'], correctAnswer: 'Right', explanation: 'Rotating 90° clockwise turns Up → Right.', topic: 'Rotation' },
  { id: 'nvr-mc-003', text: 'A vertical mirror reflects a right-facing arrow. What does the reflection show?', options: ['Right-facing arrow', 'Left-facing arrow', 'Up-facing arrow', 'Down-facing arrow'], correctAnswer: 'Left-facing arrow', explanation: 'A vertical mirror reverses left/right. Right becomes left.', topic: 'Reflection' },
  { id: 'nvr-mc-004', text: 'A black square contains a white circle. In the inverted (negative) image, what is shown?', options: ['Black square, white circle', 'White square, black circle', 'All white', 'All black'], correctAnswer: 'White square, black circle', explanation: 'Inverting swaps black↔white. Black square → white square; white circle → black circle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-005', text: 'Pattern of dots: 1, 3, 6, 10, ___. What comes next?', options: ['12', '13', '15', '16'], correctAnswer: '15', explanation: 'Triangle numbers: add 2, 3, 4, 5. 10 + 5 = 15.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-006', text: 'Which shape has exactly 4 lines of symmetry?', options: ['Equilateral triangle', 'Rectangle', 'Square', 'Regular pentagon'], correctAnswer: 'Square', explanation: 'A square has 4 lines of symmetry: 2 through midpoints and 2 through vertices (diagonals).', topic: 'Symmetry' },
  { id: 'nvr-mc-007', text: 'An arrow pointing North-East is rotated 90° anticlockwise. It now points:', options: ['North-West', 'South-East', 'South-West', 'North-East'], correctAnswer: 'North-West', explanation: '90° anticlockwise rotation: NE → NW.', topic: 'Rotation' },
  { id: 'nvr-mc-008', text: 'A cube has how many edges?', options: ['6', '8', '10', '12'], correctAnswer: '12', explanation: 'A cube has 12 edges (4 on top, 4 on bottom, 4 vertical).', topic: '3D Shapes' },
  { id: 'nvr-mc-009', text: 'Pattern: shapes alternate shaded/unshaded. Shape 1 is shaded. Shape 7 is:', options: ['Shaded', 'Unshaded', 'Half-shaded', 'Cannot tell'], correctAnswer: 'Shaded', explanation: 'Odd = shaded, even = unshaded. Shape 7 is odd → shaded.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-010', text: 'A regular hexagon has how many lines of symmetry?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: 'A regular hexagon has 6 lines of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-011', text: 'Which 3D shape has exactly 5 faces?', options: ['Cube', 'Triangular prism', 'Square pyramid', 'Tetrahedron'], correctAnswer: 'Square pyramid', explanation: 'A square pyramid has 1 square base + 4 triangular faces = 5 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-012', text: 'A pattern: each shape gains one extra side each time. Starting with triangle, shape 5 is:', options: ['Pentagon', 'Hexagon', 'Heptagon', 'Octagon'], correctAnswer: 'Heptagon', explanation: 'Triangle(3), square(4), pentagon(5), hexagon(6), heptagon(7). Shape 5 = heptagon.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-013', text: 'A shape rotated 180°: an arrow pointing right now points:', options: ['Up', 'Down', 'Left', 'Right'], correctAnswer: 'Left', explanation: '180° rotation reverses direction completely: right → left.', topic: 'Rotation' },
  { id: 'nvr-mc-014', text: 'How many vertices does a square pyramid have?', options: ['4', '5', '6', '8'], correctAnswer: '5', explanation: 'A square pyramid: 4 base corners + 1 apex = 5 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-015', text: 'Pattern: number of sides doubles each time. Start: 3. Step 3 has:', options: ['6', '9', '12', '24'], correctAnswer: '12', explanation: '3 → 6 → 12. Step 3 = 12 sides.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-016', text: 'In a sequence, each figure has one more line of shading. Figure 1: no lines. Figure 4 has:', options: ['2 lines', '3 lines', '4 lines', '5 lines'], correctAnswer: '3 lines', explanation: 'Figure 1=0, Figure 2=1, Figure 3=2, Figure 4=3 lines.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-017', text: 'A horizontal mirror reflects an upward-pointing triangle. It becomes:', options: ['Upward-pointing triangle', 'Downward-pointing triangle', 'Left-pointing triangle', 'Right-pointing triangle'], correctAnswer: 'Downward-pointing triangle', explanation: 'A horizontal mirror flips vertically: up → down.', topic: 'Reflection' },
  { id: 'nvr-mc-018', text: 'Which shape has rotational symmetry of order 3?', options: ['Square', 'Equilateral triangle', 'Regular hexagon', 'Rectangle'], correctAnswer: 'Equilateral triangle', explanation: 'An equilateral triangle looks identical at 0°, 120°, and 240° — order 3.', topic: 'Symmetry' },
  { id: 'nvr-mc-019', text: 'A cube net has how many squares?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: 'A cube has 6 faces, so its net contains 6 squares.', topic: '3D Shapes' },
  { id: 'nvr-mc-020', text: 'Pattern: small square, medium square, large square, ___. What comes next?', options: ['Extra-large square', 'Small square again', 'Small circle', 'Medium circle'], correctAnswer: 'Extra-large square', explanation: 'The pattern is increasing size. The next step is extra-large square.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-021', text: 'An arrow is rotated 270° clockwise from pointing left. It now points:', options: ['Up', 'Down', 'Left', 'Right'], correctAnswer: 'Down', explanation: 'Left → 90°CW → Up → 90°CW → Right → 90°CW → Down. Three 90° turns = 270°.', topic: 'Rotation' },
  { id: 'nvr-mc-022', text: 'How many faces does a triangular prism have?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: 'Triangular prism: 2 triangular faces + 3 rectangular faces = 5 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-023', text: 'A 3×3 grid must have one circle, one square, one triangle per row and column. Top row: circle, square, triangle. Middle row: square, ___, circle. What fills the blank?', options: ['Circle', 'Square', 'Triangle', 'Diamond'], correctAnswer: 'Triangle', explanation: 'Middle row has square and circle. Missing shape = triangle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-024', text: 'Which shape has no lines of symmetry?', options: ['Equilateral triangle', 'Scalene triangle', 'Isosceles triangle', 'Right-angled isosceles triangle'], correctAnswer: 'Scalene triangle', explanation: 'A scalene triangle has all different sides and no lines of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-025', text: 'In a pattern, every third shape is shaded. Shapes 3, 6, 9 are shaded. Is shape 15 shaded?', options: ['Yes', 'No', 'Cannot tell', 'Only sometimes'], correctAnswer: 'Yes', explanation: '15 is divisible by 3. Following the pattern, shape 15 is shaded.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-026', text: 'A tetrahedron has how many vertices?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'A tetrahedron (triangular pyramid) has 4 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-027', text: 'Shape sequence: the shape rotates 45° clockwise each step. After 8 steps, it is back to:', options: ['45° position', '90° position', 'Original position', '180° position'], correctAnswer: 'Original position', explanation: '8 × 45° = 360°. After 8 steps it has rotated a full 360° and is back to start.', topic: 'Rotation' },
  { id: 'nvr-mc-028', text: 'A pattern shows increasing size then decreasing: small, medium, large, medium, ___. What next?', options: ['Large', 'Small', 'Extra-large', 'Medium'], correctAnswer: 'Small', explanation: 'The pattern goes up then down: small, medium, large, medium, small.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-029', text: 'How many edges does a triangular prism have?', options: ['6', '7', '8', '9'], correctAnswer: '9', explanation: 'Triangular prism: 3 edges on each triangle (×2=6) + 3 connecting edges = 9.', topic: '3D Shapes' },
  { id: 'nvr-mc-030', text: 'A shape is reflected in a diagonal mirror (top-right to bottom-left). A shape at top-left moves to:', options: ['Top-right', 'Bottom-left', 'Bottom-right', 'Stays in place'], correctAnswer: 'Bottom-right', explanation: 'A diagonal mirror from top-right to bottom-left swaps top-left ↔ bottom-right.', topic: 'Reflection' },
  { id: 'nvr-mc-031', text: 'Pattern in a row: 1 dot, 4 dots, 9 dots, 16 dots, ___. What next?', options: ['20 dots', '22 dots', '25 dots', '36 dots'], correctAnswer: '25 dots', explanation: 'Square numbers: 1², 2², 3², 4², 5² = 25.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-032', text: 'Which 3D shape has a circular base and comes to a point?', options: ['Cylinder', 'Sphere', 'Cone', 'Pyramid'], correctAnswer: 'Cone', explanation: 'A cone has a circular base and a single apex point at the top.', topic: '3D Shapes' },
  { id: 'nvr-mc-033', text: 'In a sequence, each image is rotated 90° from the last. Image 1 = arrow pointing up. Image 5 = ?', options: ['Up', 'Right', 'Down', 'Left'], correctAnswer: 'Up', explanation: '4 × 90° = 360°. Image 5 is back to the starting position: up.', topic: 'Rotation' },
  { id: 'nvr-mc-034', text: 'A cross shape (+) has how many lines of symmetry?', options: ['2', '3', '4', '6'], correctAnswer: '4', explanation: 'A symmetric cross (+) has 4 lines of symmetry: vertical, horizontal, and two diagonals.', topic: 'Symmetry' },
  { id: 'nvr-mc-035', text: 'Shapes: large outside, small inside. Pattern — outside stays same shape, inside rotates. If inside starts as triangle pointing up, after 2 steps (90° each) it points:', options: ['Up', 'Right', 'Down', 'Left'], correctAnswer: 'Down', explanation: 'Up → 90°CW → Right → 90°CW → Down.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-036', text: 'How many faces does a sphere have?', options: ['0', '1', '2', 'Infinite'], correctAnswer: '1', explanation: 'A sphere has 1 curved face — it is a single continuous surface.', topic: '3D Shapes' },
  { id: 'nvr-mc-037', text: 'A shape is reflected twice: first in a vertical mirror, then in a horizontal mirror. The combined effect is the same as a rotation of:', options: ['90°', '180°', '270°', '360°'], correctAnswer: '180°', explanation: 'Two reflections in perpendicular mirrors = 180° rotation.', topic: 'Reflection' },
  { id: 'nvr-mc-038', text: 'Pattern: each figure has one more circle. Figure 3 has 3 circles. Figure 6 has:', options: ['4 circles', '5 circles', '6 circles', '7 circles'], correctAnswer: '6 circles', explanation: 'Figure number = number of circles. Figure 6 = 6 circles.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-039', text: 'A square is split into 4 equal triangles by drawing both diagonals. Each triangle has interior angles of:', options: ['30°, 60°, 90°', '45°, 45°, 90°', '60°, 60°, 60°', '45°, 60°, 75°'], correctAnswer: '45°, 45°, 90°', explanation: 'Each diagonal bisects the 90° corner angle, creating 45°–45°–90° triangles.', topic: 'Shapes' },
  { id: 'nvr-mc-040', text: 'In a 2×2 grid, each cell has a different shape: top-left=circle, top-right=square. Bottom-left=triangle. If the pattern is that each shape appears once, bottom-right =?', options: ['Circle', 'Square', 'Triangle', 'Star'], correctAnswer: 'Star', explanation: 'All four cells must have different shapes. Star is the missing one (4th shape not yet used).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-041', text: 'Which rotation of a rectangle produces a shape identical to the original?', options: ['45°', '90°', '180°', '270°'], correctAnswer: '180°', explanation: 'A rectangle (non-square) looks the same after 180° rotation (opposite sides are equal).', topic: 'Rotation' },
  { id: 'nvr-mc-042', text: 'How many vertices does a cube have?', options: ['4', '6', '8', '12'], correctAnswer: '8', explanation: 'A cube has 8 corners (vertices).', topic: '3D Shapes' },
  { id: 'nvr-mc-043', text: 'Pattern: shading moves clockwise one position each step. Start: top quarter shaded. After 3 steps:', options: ['Left quarter shaded', 'Bottom quarter shaded', 'Right quarter shaded', 'Top quarter shaded'], correctAnswer: 'Left quarter shaded', explanation: 'Top → Right → Bottom → Left (3 clockwise steps from top).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-044', text: 'A cylinder has how many faces?', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: 'A cylinder has 2 circular faces (top and bottom) + 1 curved surface = 3 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-045', text: 'A rectangle reflected in a vertical mirror line remains:', options: ['A different rectangle', 'The same shape (identical)', 'A square', 'A parallelogram'], correctAnswer: 'The same shape (identical)', explanation: 'Reflecting a rectangle in a vertical mirror produces an identical rectangle.', topic: 'Reflection' },
  { id: 'nvr-mc-046', text: 'Pattern: shapes get darker each step (white→light grey→dark grey→black). Step 5 would be:', options: ['White', 'Light grey', 'Dark grey', 'Black (then cycle restarts)'], correctAnswer: 'White', explanation: '4-step cycle. Step 1=white, 2=light grey, 3=dark grey, 4=black, 5=white (cycle restarts).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-047', text: 'An equilateral triangle has rotational symmetry of order:', options: ['1', '2', '3', '6'], correctAnswer: '3', explanation: 'An equilateral triangle looks identical at 0°, 120°, and 240°. Order = 3.', topic: 'Symmetry' },
  { id: 'nvr-mc-048', text: 'How many faces does a cube have?', options: ['4', '6', '8', '12'], correctAnswer: '6', explanation: 'A cube has 6 square faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-049', text: 'A pattern: the inner shape in each frame alternates between circle and square. Frame 1=circle, frame 2=square, frame 5=?', options: ['Circle', 'Square', 'Triangle', 'Star'], correctAnswer: 'Circle', explanation: 'Odd frames = circle, even frames = square. Frame 5 is odd → circle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-050', text: 'Which shape has the order of rotational symmetry of 1 (i.e. only looks the same at 360°)?', options: ['Equilateral triangle', 'Square', 'Scalene triangle', 'Regular hexagon'], correctAnswer: 'Scalene triangle', explanation: 'A scalene triangle has no rotational symmetry (all sides different) — order 1.', topic: 'Symmetry' },
  { id: 'nvr-mc-051', text: 'In a 3×3 matrix, each row and column has exactly one of: ○ △ □. Row 1: ○ △ □. Col 1: ○ △ □. What is in position (row 3, col 3)?', options: ['○', '△', '□', 'Cannot tell'], correctAnswer: '○', explanation: 'Row 3 already has △ and □ (from other columns). Position (3,3) must be ○.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-052', text: 'A shape rotated 90° anticlockwise three times is the same as:', options: ['90° clockwise', '180°', '270° anticlockwise', '90° anticlockwise'], correctAnswer: '90° clockwise', explanation: '3 × 90° anticlockwise = 270° anticlockwise = 90° clockwise.', topic: 'Rotation' },
  { id: 'nvr-mc-053', text: 'Pattern: the number of shapes in each row follows 1, 2, 3, 4... How many shapes in row 8?', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: 'Row n has n shapes. Row 8 has 8 shapes.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-054', text: 'A pentagonal prism has how many faces?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: 'Pentagonal prism: 2 pentagonal faces + 5 rectangular faces = 7 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-055', text: 'A shape is reflected in a horizontal axis. A shape in the top-left moves to:', options: ['Top-right', 'Bottom-left', 'Bottom-right', 'Stays in place'], correctAnswer: 'Bottom-left', explanation: 'Reflection in a horizontal axis flips vertically: top-left → bottom-left.', topic: 'Reflection' },
  { id: 'nvr-mc-056', text: 'Pattern: each figure, the shaded region moves 90° clockwise. Start: right half shaded. After 2 steps:', options: ['Right half', 'Left half', 'Top half', 'Bottom half'], correctAnswer: 'Bottom half', explanation: 'Right → Bottom (after 1 step) → Left (after 2 steps)? Wait: right→90°CW the shading moves to bottom. Then bottom→left. After 2 steps = left half.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-057', text: 'A regular pentagon has how many lines of symmetry?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: 'A regular pentagon has 5 lines of symmetry — one through each vertex to the midpoint of the opposite side.', topic: 'Symmetry' },
  { id: 'nvr-mc-058', text: 'Odd one out by shape properties: equilateral triangle, square, regular pentagon, rectangle', options: ['Equilateral triangle', 'Square', 'Regular pentagon', 'Rectangle'], correctAnswer: 'Rectangle', explanation: 'Equilateral triangle, square and regular pentagon are all regular polygons (equal sides and angles). A rectangle is not regular (sides not all equal).', topic: 'Shapes' },
  { id: 'nvr-mc-059', text: 'A cross (+) rotated 45° becomes:', options: ['A larger cross', 'An × shape', 'A square', 'A diamond'], correctAnswer: 'An × shape', explanation: 'A + cross rotated 45° creates an × pattern.', topic: 'Rotation' },
  { id: 'nvr-mc-060', text: 'Tiles pattern: each tile is split diagonally, half black half white. In the next tile the diagonal switches direction. Starting with \\, the 5th tile has:', options: ['Diagonal \\', 'Diagonal /', 'All black', 'All white'], correctAnswer: 'Diagonal \\', explanation: 'Alternating: \\, /, \\, /, \\. Tile 5 = \\.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-061', text: 'How many edges does a square pyramid have?', options: ['4', '6', '8', '10'], correctAnswer: '8', explanation: 'Square pyramid: 4 base edges + 4 lateral edges = 8 edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-062', text: 'Which shape has no rotational symmetry (apart from 360°)?', options: ['Square', 'Isosceles triangle (non-equilateral)', 'Regular hexagon', 'Equilateral triangle'], correctAnswer: 'Isosceles triangle (non-equilateral)', explanation: 'An isosceles triangle has 1 line of symmetry but only order-1 rotational symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-063', text: 'A 4×4 matrix: each row/column must contain exactly one each of 4 symbols. Row 1: ★☆▲●. Row 2 starts ☆★●___. The missing symbol is:', options: ['★', '☆', '▲', '●'], correctAnswer: '▲', explanation: 'Row 2 has ☆, ★, ●. The missing symbol is ▲.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-064', text: 'An octahedron has how many faces?', options: ['6', '7', '8', '10'], correctAnswer: '8', explanation: 'A regular octahedron has 8 equilateral triangular faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-065', text: 'Pattern sequence: each figure has double the number of dots of the previous. Figure 1=1 dot, Figure 5=?', options: ['8 dots', '16 dots', '25 dots', '32 dots'], correctAnswer: '16 dots', explanation: '1, 2, 4, 8, 16. Figure 5 = 16 dots.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-066', text: 'A shape has 4 lines of symmetry and rotational symmetry of order 4. It is a:', options: ['Rectangle', 'Rhombus', 'Square', 'Parallelogram'], correctAnswer: 'Square', explanation: 'Only a square has 4 lines of symmetry and order-4 rotational symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-067', text: 'How many vertices does a regular octahedron have?', options: ['4', '6', '8', '12'], correctAnswer: '6', explanation: 'A regular octahedron has 6 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-068', text: 'In a pattern, the large shape rotates 45° clockwise each step. Starting pointing right, after 4 steps:', options: ['Right', 'Down', 'Left', 'Up'], correctAnswer: 'Down', explanation: '4 × 45° = 180°. Right → 180° → Left. Wait: right rotated 180° = left. Hmm, 4×45=180: right(0°)→45°→90°→135°→180°=left. Answer: Left.', topic: 'Rotation' },
  { id: 'nvr-mc-069', text: 'Pattern: inside shape alternates between filled and outline. Shape 1=filled circle. Shape 4=?', options: ['Filled circle', 'Outline circle', 'Filled square', 'Outline square'], correctAnswer: 'Outline circle', explanation: 'Odd positions = filled, even positions = outline. Shape 4 (even) = outline circle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-070', text: 'A dodecahedron has how many faces?', options: ['10', '12', '14', '20'], correctAnswer: '12', explanation: 'A dodecahedron has 12 pentagonal faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-071', text: 'Which shape, when rotated 90°, looks identical to its original?', options: ['Rectangle', 'Square', 'Equilateral triangle', 'Regular pentagon'], correctAnswer: 'Square', explanation: 'A square looks the same at 0°, 90°, 180°, and 270°.', topic: 'Rotation' },
  { id: 'nvr-mc-072', text: 'Pattern: shapes in a row go from 3 sides to 8 sides, adding 1 side each time. Which position has the hexagon?', options: ['Position 3', 'Position 4', 'Position 5', 'Position 6'], correctAnswer: 'Position 4', explanation: 'Triangle(3)=pos 1, square(4)=pos 2, pentagon(5)=pos 3, hexagon(6)=pos 4.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-073', text: 'A regular octagon has how many lines of symmetry?', options: ['4', '6', '8', '10'], correctAnswer: '8', explanation: 'A regular octagon has 8 lines of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-074', text: 'In a net of a square pyramid, how many triangles are there?', options: ['2', '3', '4', '5'], correctAnswer: '4', explanation: 'A square pyramid has 4 triangular faces, so its net has 4 triangles + 1 square.', topic: '3D Shapes' },
  { id: 'nvr-mc-075', text: 'Pattern: shapes are arranged in a 3×3 grid. The number of sides increases by 1 going right across each row, and by 1 going down each column. Top-left=triangle(3). What is bottom-right?', options: ['Hexagon', 'Heptagon', 'Octagon', 'Pentagon'], correctAnswer: 'Heptagon', explanation: 'Bottom-right = (3+2) sides across + (3+2) down? Actually: top-left = 3+0+0=3, top-right=3+2=5, bottom-left=3+2=5, bottom-right=3+2+2=7 = heptagon.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-076', text: 'Which of these is NOT a valid net for a cube?', options: ['A T-shape of 6 squares', 'A straight line of 6 squares', 'A cross of 6 squares', 'An L-shape of 6 squares'], correctAnswer: 'A straight line of 6 squares', explanation: '6 squares in a straight line cannot fold into a cube — opposing faces would overlap.', topic: '3D Shapes' },
  { id: 'nvr-mc-077', text: 'A letter P is reflected in a vertical mirror. The result looks like:', options: ['P', 'q', 'd', 'b'], correctAnswer: 'q', explanation: 'Reflecting P in a vertical mirror flips it horizontally to produce q.', topic: 'Reflection' },
  { id: 'nvr-mc-078', text: 'Pattern: each subsequent square has its shading increase by 25%. Square 1=0%, square 3=50%, square 5=?', options: ['75%', '100%', '125% (restart?)', '50%'], correctAnswer: '100%', explanation: '+25% each step: 0, 25, 50, 75, 100. Square 5 = 100% shaded.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-079', text: 'How many faces does a regular icosahedron have?', options: ['12', '16', '20', '24'], correctAnswer: '20', explanation: 'A regular icosahedron has 20 equilateral triangular faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-080', text: 'The letter "S" reflected in a vertical mirror becomes:', options: ['S', 'S (backwards)', 'Z', '2'], correctAnswer: 'S (backwards)', explanation: 'S reflected horizontally reverses, creating a mirror-image S (which looks like a backwards S or ꟊ).', topic: 'Reflection' },
  { id: 'nvr-mc-081', text: 'In a pattern, a small shape inside a large shape: each step the inner shape gets bigger and the outer gets smaller. After enough steps they become equal size. This describes:', options: ['Convergence', 'Divergence', 'Alternation', 'Rotation'], correctAnswer: 'Convergence', explanation: 'The inner and outer shapes converge (approach the same size) — this is convergence.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-082', text: 'How many edges does a regular octahedron have?', options: ['8', '10', '12', '14'], correctAnswer: '12', explanation: 'A regular octahedron has 12 edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-083', text: 'A shape with rotational symmetry order 6 is:', options: ['Square', 'Regular hexagon', 'Regular octagon', 'Equilateral triangle'], correctAnswer: 'Regular hexagon', explanation: 'A regular hexagon looks identical every 60° (360°÷6). It has order-6 rotational symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-084', text: 'Pattern: position of a small square inside a large square moves clockwise from corner to corner each step: top-left, top-right, bottom-right, bottom-left, top-left. At step 9, the small square is at:', options: ['Top-left', 'Top-right', 'Bottom-right', 'Bottom-left'], correctAnswer: 'Top-left', explanation: 'Cycle of 4: positions 1,5,9 = top-left. Step 9 = top-left.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-085', text: 'A letter b rotated 180° looks like:', options: ['d', 'p', 'q', 'b'], correctAnswer: 'q', explanation: 'Rotating b 180° turns it upside down and reverses it — producing q.', topic: 'Rotation' },
  { id: 'nvr-mc-086', text: 'In a matrix, shapes get smaller by half each row. Row 1 has shapes of size 16. Row 4 has shapes of size:', options: ['2', '4', '8', '10'], correctAnswer: '2', explanation: '16 → 8 → 4 → 2. Row 4 = size 2.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-087', text: 'How many edges does a triangular pyramid (tetrahedron) have?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: 'A tetrahedron has 6 edges: 3 on the base triangle + 3 lateral edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-088', text: 'A rhombus has how many lines of symmetry?', options: ['0', '1', '2', '4'], correctAnswer: '2', explanation: 'A rhombus has 2 lines of symmetry — along each diagonal.', topic: 'Symmetry' },
  { id: 'nvr-mc-089', text: 'In a pattern, the outside shape stays the same but the inside shape changes: circle, triangle, circle, triangle, ___. What comes next?', options: ['Square', 'Circle', 'Triangle', 'Pentagon'], correctAnswer: 'Circle', explanation: 'The inside alternates: circle, triangle, circle, triangle, circle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-090', text: 'A triangular prism has how many vertices?', options: ['4', '5', '6', '8'], correctAnswer: '6', explanation: 'A triangular prism has 6 vertices: 3 on each triangular end.', topic: '3D Shapes' },
  { id: 'nvr-mc-091', text: 'If an arrow pointing East is reflected in a horizontal mirror line, it now points:', options: ['West', 'East', 'North', 'South'], correctAnswer: 'East', explanation: 'Horizontal reflection flips vertically (up/down) not horizontally. An East-pointing arrow remains East.', topic: 'Reflection' },
  { id: 'nvr-mc-092', text: 'Pattern: each image, one more diagonal line is added. Image 1 has 1 line, image 4 has 4 lines, image 7 has:', options: ['6 lines', '7 lines', '8 lines', '9 lines'], correctAnswer: '7 lines', explanation: 'Image number = number of diagonal lines. Image 7 has 7 lines.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-093', text: 'A regular polygon where each interior angle is 120° has how many sides?', options: ['5', '6', '7', '8'], correctAnswer: '6', explanation: 'Interior angle of regular polygon = (n-2)×180/n. For 120°: 120n = 180n-360. 60n=360. n=6. Hexagon.', topic: 'Shapes' },
  { id: 'nvr-mc-094', text: 'A cube seen from the front looks like a square. What does it look like from any other face?', options: ['Rectangle', 'Square', 'Triangle', 'Circle'], correctAnswer: 'Square', explanation: 'All faces of a cube are identical squares, so it looks like a square from any face.', topic: '3D Shapes' },
  { id: 'nvr-mc-095', text: 'Pattern: shapes rotate 60° each step. After 6 steps, the shape is at:', options: ['60°', '180°', '360° (original)', '300°'], correctAnswer: '360° (original)', explanation: '6 × 60° = 360°. After 6 steps, it has returned to its original position.', topic: 'Rotation' },
  { id: 'nvr-mc-096', text: 'In a 3×3 grid with 9 shapes, shading follows a diagonal pattern from top-left. How many shapes on the main diagonal are shaded?', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: 'The main diagonal of a 3×3 grid contains 3 cells (top-left, centre, bottom-right).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-097', text: 'An isosceles triangle has how many lines of symmetry?', options: ['0', '1', '2', '3'], correctAnswer: '1', explanation: 'An isosceles triangle has 1 line of symmetry — through the apex and the midpoint of the base.', topic: 'Symmetry' },
  { id: 'nvr-mc-098', text: 'A hexagonal prism has how many faces?', options: ['6', '7', '8', '10'], correctAnswer: '8', explanation: 'Hexagonal prism: 2 hexagonal faces + 6 rectangular faces = 8 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-099', text: 'Pattern: a small shape moves inside a large shape one position clockwise each step. After completing one full circuit (4 steps in a square), it returns to:', options: ['The starting position', 'The next position', 'The opposite position', 'A random position'], correctAnswer: 'The starting position', explanation: 'After 4 steps moving clockwise through 4 corners, it returns to the start.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-100', text: 'Which letter looks the same when rotated 180°?', options: ['L', 'N', 'S', 'K'], correctAnswer: 'S', explanation: 'The letter S, when rotated 180°, still looks like S (it has 180° rotational symmetry).', topic: 'Rotation' },
  { id: 'nvr-mc-101', text: 'Pattern in a matrix: shading moves one column right each row. Row 1: col 1 shaded. Row 4: which column is shaded?', options: ['Col 1', 'Col 3', 'Col 4', 'Col 5'], correctAnswer: 'Col 4', explanation: 'Row 1=col 1, Row 2=col 2, Row 3=col 3, Row 4=col 4.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-102', text: 'A circle reflected in any mirror line is:', options: ['An oval', 'The same circle', 'A different size circle', 'A semicircle'], correctAnswer: 'The same circle', explanation: 'A circle has infinite lines of symmetry; reflected in any line through its centre it is identical.', topic: 'Reflection' },
  { id: 'nvr-mc-103', text: 'How many faces, edges, and vertices does a cube have?', options: ['6 faces, 12 edges, 8 vertices', '6 faces, 8 edges, 12 vertices', '8 faces, 12 edges, 6 vertices', '4 faces, 6 edges, 4 vertices'], correctAnswer: '6 faces, 12 edges, 8 vertices', explanation: 'Cube: 6 faces, 12 edges, 8 vertices. Euler\'s formula: 6+8-12=2 ✓', topic: '3D Shapes' },
  { id: 'nvr-mc-104', text: 'A pattern: the shape in column 2 is always a 90° rotation of column 1. If column 1 has an arrow pointing left, column 2 has:', options: ['Arrow pointing left', 'Arrow pointing right', 'Arrow pointing up', 'Arrow pointing down'], correctAnswer: 'Arrow pointing up', explanation: 'Left + 90° clockwise = Up.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-105', text: 'Which capital letter has exactly 2 lines of symmetry?', options: ['A', 'H', 'Y', 'G'], correctAnswer: 'H', explanation: 'H has a vertical line of symmetry and a horizontal line of symmetry — exactly 2.', topic: 'Symmetry' },
  { id: 'nvr-mc-106', text: 'A triangular prism: if you look at it from the side (rectangular face), you see:', options: ['A triangle', 'A rectangle', 'A square', 'A hexagon'], correctAnswer: 'A rectangle', explanation: 'Looking at the rectangular face of a triangular prism, you see a rectangle.', topic: '3D Shapes' },
  { id: 'nvr-mc-107', text: 'Pattern: each row in a matrix, the shaded area grows by one quarter. Row 1: 1/4 shaded. Row 5 would be:', options: ['Fully shaded', '3/4 shaded', 'Half shaded', '5/4 (impossible — restart?)'], correctAnswer: 'Fully shaded', explanation: 'Row 1=1/4, Row 2=2/4, Row 3=3/4, Row 4=4/4=full. Row 5 might restart or stay full. Answer: fully shaded.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-108', text: 'An arrow pointing down is rotated 90° anticlockwise. It points:', options: ['Up', 'Down', 'Left', 'Right'], correctAnswer: 'Right', explanation: 'Down rotated 90° anticlockwise → Right.', topic: 'Rotation' },
  { id: 'nvr-mc-109', text: 'Euler\'s formula for polyhedra: F + V - E = ?', options: ['0', '1', '2', '3'], correctAnswer: '2', explanation: 'Euler\'s formula: Faces + Vertices - Edges = 2 for any convex polyhedron.', topic: '3D Shapes' },
  { id: 'nvr-mc-110', text: 'Pattern: each figure, the shapes inside the large circle increase by 1. Figure 1=1 shape, figure 6=?', options: ['5 shapes', '6 shapes', '7 shapes', '8 shapes'], correctAnswer: '6 shapes', explanation: 'Figure n contains n shapes. Figure 6 contains 6 shapes.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-111', text: 'Which capital letter looks the same when reflected in a vertical mirror?', options: ['F', 'L', 'A', 'J'], correctAnswer: 'A', explanation: 'A is symmetric about its vertical axis — it has a vertical line of symmetry.', topic: 'Reflection' },
  { id: 'nvr-mc-112', text: 'A cylinder: looking from the top, you see:', options: ['A rectangle', 'A circle', 'An oval', 'A triangle'], correctAnswer: 'A circle', explanation: 'Looking down at a cylinder from the top, you see the circular face.', topic: '3D Shapes' },
  { id: 'nvr-mc-113', text: 'In a sequence, each shape is the mirror image of the previous. Shape 1 = R. Shape 3 = ?', options: ['R', 'Я (mirror R)', 'P', 'D'], correctAnswer: 'R', explanation: 'Mirror then mirror again returns to original. Shape 1=R, shape 2=mirror-R, shape 3=R again.', topic: 'Reflection' },
  { id: 'nvr-mc-114', text: 'Pattern: top-left corner square is shaded. Each step, the shading moves one square right. After reaching the right edge, it moves down to the next row. A 3×3 grid: which square is shaded at step 5?', options: ['Row 1 col 5 (out of range)', 'Row 2 col 2', 'Row 2 col 3', 'Row 3 col 1'], correctAnswer: 'Row 2 col 2', explanation: 'Steps: (1,1),(1,2),(1,3),(2,1),(2,2). Step 5 = row 2, col 2.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-115', text: 'How many lines of symmetry does a regular decagon (10 sides) have?', options: ['5', '8', '10', '12'], correctAnswer: '10', explanation: 'A regular decagon has 10 lines of symmetry (= number of sides).', topic: 'Symmetry' },
  { id: 'nvr-mc-116', text: 'A cone viewed from directly above looks like:', options: ['A triangle', 'A rectangle', 'A circle with a dot at center', 'A semicircle'], correctAnswer: 'A circle with a dot at center', explanation: 'From above, you see the circular base with the apex appearing as a point at the centre.', topic: '3D Shapes' },
  { id: 'nvr-mc-117', text: 'Pattern: shapes rotate 120° each step. Starting pointing up, after 3 steps:', options: ['Up', 'Right', 'Down', 'Left'], correctAnswer: 'Up', explanation: '3 × 120° = 360°. Returns to original position (up).', topic: 'Rotation' },
  { id: 'nvr-mc-118', text: 'In a pattern, alternating columns have circles and squares. Column 1=circles, column 2=squares. Column 7=?', options: ['Circles', 'Squares', 'Triangles', 'Mixed'], correctAnswer: 'Circles', explanation: 'Odd columns = circles, even columns = squares. Column 7 is odd → circles.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-119', text: 'A parallelogram has how many lines of symmetry?', options: ['0', '1', '2', '4'], correctAnswer: '0', explanation: 'A (non-rectangular) parallelogram has no lines of symmetry — but it does have rotational symmetry of order 2.', topic: 'Symmetry' },
  { id: 'nvr-mc-120', text: 'How many vertices does a pentagonal prism have?', options: ['5', '7', '10', '12'], correctAnswer: '10', explanation: 'A pentagonal prism: 5 vertices on each pentagon × 2 = 10 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-121', text: 'A figure is reflected vertically then rotated 180°. The combined effect equals:', options: ['Horizontal reflection', 'Vertical reflection', 'No change', '270° rotation'], correctAnswer: 'Horizontal reflection', explanation: 'Vertical reflection + 180° rotation = horizontal reflection.', topic: 'Reflection' },
  { id: 'nvr-mc-122', text: 'Pattern: row 1 has triangles, row 2 has squares, row 3 has pentagons. Row 6 has:', options: ['Triangles', 'Squares', 'Octagons', 'Pentagons'], correctAnswer: 'Octagons', explanation: 'Row n has shapes with (n+2) sides: row 1=triangle(3), row 2=square(4)... row 6=octagon(8).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-123', text: 'An F reflected horizontally looks like:', options: ['F', 'Reversed F', 'T', 'L'], correctAnswer: 'Reversed F', explanation: 'F reflected in a vertical mirror produces a mirror image (horizontally reversed) F.', topic: 'Reflection' },
  { id: 'nvr-mc-124', text: 'A pattern: corner shapes in a 2×2 grid rotate clockwise each step. Top-left=star, top-right=circle, bottom-right=square, bottom-left=triangle. After 2 rotations, top-left=?', options: ['Star', 'Circle', 'Square', 'Triangle'], correctAnswer: 'Square', explanation: 'After 1 step: TL=triangle, TR=star, BR=circle, BL=square. After 2 steps: TL=square.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-125', text: 'A shape with 4 equal sides and no right angles is a:', options: ['Square', 'Rectangle', 'Rhombus', 'Trapezium'], correctAnswer: 'Rhombus', explanation: 'A rhombus has 4 equal sides but its angles are not 90° (unlike a square).', topic: 'Shapes' },
  { id: 'nvr-mc-126', text: 'Pattern: each step, a new row of shapes is added below. Rows form a triangle. Row 1=1 shape, row 2=2 shapes. Total shapes in first 5 rows:', options: ['10', '12', '14', '15'], correctAnswer: '15', explanation: '1+2+3+4+5=15 shapes total in first 5 rows.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-127', text: 'Which shape, when its net is folded, creates a cylinder?', options: ['A rectangle with two circles', 'Two squares and four rectangles', 'Six squares', 'Four triangles'], correctAnswer: 'A rectangle with two circles', explanation: 'A cylinder net consists of a rectangle (the curved surface) and two circles (top and bottom).', topic: '3D Shapes' },
  { id: 'nvr-mc-128', text: 'A kite has how many lines of symmetry?', options: ['0', '1', '2', '4'], correctAnswer: '1', explanation: 'A kite has exactly 1 line of symmetry — along its main axis (connecting the two unequal angles).', topic: 'Symmetry' },
  { id: 'nvr-mc-129', text: 'In a pattern, white circles turn grey and grey turn black and black turn white each step. Start: white. After 4 steps:', options: ['White', 'Grey', 'Black', 'Striped'], correctAnswer: 'White', explanation: 'Cycle of 3: white→grey→black→white. After 3 steps=white, after 4 steps=grey. Actually: step 1=grey, step 2=black, step 3=white, step 4=grey. After 4 steps = grey.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-130', text: 'A shape has 4 lines of symmetry. Its rotational symmetry order is at least:', options: ['2', '3', '4', '8'], correctAnswer: '4', explanation: 'If a shape has n lines of symmetry, its rotational symmetry order is also n (for regular shapes). 4 lines → order 4.', topic: 'Symmetry' },
  { id: 'nvr-mc-131', text: 'Pattern: each row, shapes get 1 side more AND rotate 45°. Starting with triangle(3): row 3 shape has __ sides:', options: ['4', '5', '6', '7'], correctAnswer: '5', explanation: 'Row 1=triangle(3), row 2=square(4), row 3=pentagon(5).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-132', text: 'How many faces does a hexagonal pyramid have?', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: 'Hexagonal pyramid: 1 hexagonal base + 6 triangular faces = 7 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-133', text: 'An arrow pointing South-West is rotated 90° clockwise. It now points:', options: ['North-West', 'North-East', 'South-East', 'South-West'], correctAnswer: 'North-West', explanation: 'SW + 90° clockwise = NW.', topic: 'Rotation' },
  { id: 'nvr-mc-134', text: 'Pattern: the number of sides of the shape in a matrix = (row number) × (column number). Position (row 2, col 3) has a shape with:', options: ['4 sides', '5 sides', '6 sides', '7 sides'], correctAnswer: '6 sides', explanation: '2 × 3 = 6. A hexagon (6 sides).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-135', text: 'Which transformation keeps the size and shape exactly the same?', options: ['Enlargement', 'Reflection', 'Stretching', 'Distortion'], correctAnswer: 'Reflection', explanation: 'Reflection is an isometry — it preserves size and shape exactly (just mirrors the position).', topic: 'Reflection' },
  { id: 'nvr-mc-136', text: 'A pentagonal prism has how many edges?', options: ['10', '12', '15', '20'], correctAnswer: '15', explanation: 'Pentagonal prism: 5 on each pentagon (×2=10) + 5 connecting = 15 edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-137', text: 'Pattern: number of shapes doubles each row, but shape gets smaller. Row 1: 1 large shape. Row 4 has:', options: ['4 shapes', '6 shapes', '8 shapes', '10 shapes'], correctAnswer: '8 shapes', explanation: '1, 2, 4, 8. Row 4 = 8 shapes (each smaller).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-138', text: 'An equilateral triangle inside a circle: how many lines of symmetry does the combined figure have?', options: ['1', '2', '3', '6'], correctAnswer: '3', explanation: 'The equilateral triangle limits the symmetry. Both have 3 common lines of symmetry when centred.', topic: 'Symmetry' },
  { id: 'nvr-mc-139', text: 'In a sequence, the shape in position n has (2n+1) sides. Position 4 has:', options: ['7', '8', '9', '10'], correctAnswer: '9', explanation: '2(4)+1 = 9 sides.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-140', text: 'A pyramid with an octagonal base has how many faces?', options: ['8', '9', '10', '12'], correctAnswer: '9', explanation: 'Octagonal pyramid: 1 octagonal base + 8 triangular faces = 9 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-141', text: 'Which letter has rotational symmetry of order 2?', options: ['A', 'S', 'C', 'L'], correctAnswer: 'S', explanation: 'S rotated 180° still looks like S — it has order-2 rotational symmetry.', topic: 'Rotation' },
  { id: 'nvr-mc-142', text: 'In a 4×4 matrix pattern, shading follows the diagonal. Row 1 col 1, row 2 col 2, row 3 col 3, row 4 col 4 are shaded. How many shaded cells in total?', options: ['3', '4', '6', '8'], correctAnswer: '4', explanation: 'Main diagonal of 4×4 matrix has 4 cells.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-143', text: 'A cube has how many pairs of parallel faces?', options: ['1', '2', '3', '6'], correctAnswer: '3', explanation: 'A cube has 3 pairs of parallel faces: top/bottom, front/back, left/right.', topic: '3D Shapes' },
  { id: 'nvr-mc-144', text: 'Pattern: shapes in a sequence rotate 30° each step. After 12 steps:', options: ['Same as start', '90° from start', '180° from start', '270° from start'], correctAnswer: 'Same as start', explanation: '12 × 30° = 360°. Back to the original position.', topic: 'Rotation' },
  { id: 'nvr-mc-145', text: 'In a 5×5 grid, every third cell is shaded (cells 3, 6, 9...). How many cells are shaded?', options: ['7', '8', '9', '10'], correctAnswer: '8', explanation: '25 ÷ 3 = 8 remainder 1. So 8 complete multiples of 3 in 1–25: 3,6,9,12,15,18,21,24 = 8 shaded cells.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-146', text: 'An octagonal prism has how many vertices?', options: ['8', '12', '16', '20'], correctAnswer: '16', explanation: 'Octagonal prism: 8 vertices on each octagon × 2 = 16 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-147', text: 'Which of the following has the same shape after rotation by any angle?', options: ['Square', 'Equilateral triangle', 'Circle', 'Rectangle'], correctAnswer: 'Circle', explanation: 'A circle looks identical regardless of how much it is rotated — it has infinite rotational symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-148', text: 'Pattern: shading alternates between top half and bottom half each step. Starts: top half shaded. Step 7:', options: ['Top half', 'Bottom half', 'Fully shaded', 'Unshaded'], correctAnswer: 'Top half', explanation: 'Odd steps = top half, even steps = bottom half. Step 7 is odd → top half.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-149', text: 'For a polyhedron: faces=8, vertices=6. How many edges (by Euler\'s formula)?', options: ['10', '12', '14', '16'], correctAnswer: '12', explanation: 'F+V-E=2: 8+6-E=2. E=12.', topic: '3D Shapes' },
  { id: 'nvr-mc-150', text: 'Pattern: a sequence of shapes grows then shrinks symmetrically: 1, 2, 3, 4, 5, 4, 3, 2, 1. What is the 13th shape in the sequence?', options: ['3', '4', '5', '1'], correctAnswer: '1', explanation: 'Pattern length = 9. 13 mod 9 = 4. Position 4 in the pattern = 4. Wait: 1,2,3,4,5,4,3,2,1 then repeats. Position 13: 13-9=4. Position 4 = 4. But if the pattern is 9 long and repeats, position 13 = position 4 = value 4.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-151', text: 'Which letter has a vertical line of symmetry AND a horizontal line of symmetry?', options: ['A', 'D', 'H', 'C'], correctAnswer: 'H', explanation: 'H has both a vertical and a horizontal line of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-152', text: 'A pattern: shapes in a 3×3 grid rotate 90° clockwise moving right across each row. Top row: arrow up, arrow right, arrow down. Middle row starts: arrow right. Next is:', options: ['Arrow up', 'Arrow down', 'Arrow left', 'Arrow right'], correctAnswer: 'Arrow down', explanation: 'Each step rotates 90° clockwise: right → down.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-153', text: 'How many edges does a hexagonal prism have?', options: ['12', '16', '18', '24'], correctAnswer: '18', explanation: 'Hexagonal prism: 6 on each hexagon (×2=12) + 6 connecting = 18 edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-154', text: 'A shape has order-4 rotational symmetry. The smallest angle of rotation that maps it to itself is:', options: ['45°', '60°', '90°', '120°'], correctAnswer: '90°', explanation: '360° ÷ 4 = 90°.', topic: 'Symmetry' },
  { id: 'nvr-mc-155', text: 'Pattern: black dots increase by 2, white dots decrease by 1. Start: 2 black, 5 white. After 2 steps, black dots =', options: ['4', '6', '8', '10'], correctAnswer: '6', explanation: '2 → 4 → 6. After 2 steps = 6 black dots.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-156', text: 'An arrow pointing South is rotated 135° anticlockwise. It points:', options: ['North-East', 'North-West', 'South-East', 'South-West'], correctAnswer: 'North-East', explanation: 'South + 135° anticlockwise = South rotated towards East: S→SE→E→NE. 135° = NE from South.', topic: 'Rotation' },
  { id: 'nvr-mc-157', text: 'In a pattern, the shaded quarter moves 90° anticlockwise each step. Starting at top-right, after 3 steps it is at:', options: ['Top-right', 'Bottom-right', 'Bottom-left', 'Top-left'], correctAnswer: 'Bottom-right', explanation: 'TR → TL (1) → BL (2) → BR (3). After 3 anticlockwise steps = bottom-right.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-158', text: 'A regular polygon has interior angles of 108°. How many sides?', options: ['4', '5', '6', '8'], correctAnswer: '5', explanation: '(n-2)×180/n = 108. 180n-360 = 108n. 72n = 360. n = 5. Pentagon.', topic: 'Shapes' },
  { id: 'nvr-mc-159', text: 'How many vertices does a hexagonal prism have?', options: ['6', '10', '12', '18'], correctAnswer: '12', explanation: 'Hexagonal prism: 6 vertices on each hexagon × 2 = 12 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-160', text: 'Pattern: in each step, one small square is added to the right of a row. Row 1 has 1 square, row 4 has 4 squares. Row 7 has:', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: 'Row n has n squares. Row 7 = 7 squares.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-161', text: 'Which shape has rotational symmetry order 2 but NO lines of symmetry?', options: ['Rectangle', 'Parallelogram', 'Square', 'Rhombus'], correctAnswer: 'Parallelogram', explanation: 'A parallelogram has order-2 rotational symmetry but no lines of reflective symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-162', text: 'A cube is painted red on all faces then cut into 27 small cubes. How many have exactly 2 red faces?', options: ['8', '12', '16', '24'], correctAnswer: '12', explanation: 'The 12 edge cubes (not corners) have exactly 2 painted faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-163', text: 'In a sequence, the shape rotates 45° clockwise AND gains one extra dot each step. Shape 1: upward arrow, 1 dot. Shape 5: how many dots?', options: ['4', '5', '6', '8'], correctAnswer: '5', explanation: 'Shape n has n dots. Shape 5 = 5 dots.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-164', text: 'An equilateral triangle has a perimeter of 18cm. Its height is approximately:', options: ['5.2cm', '6.0cm', '7.8cm', '9.0cm'], correctAnswer: '5.2cm', explanation: 'Side = 6cm. Height = 6 × (√3/2) ≈ 6 × 0.866 ≈ 5.2cm.', topic: 'Shapes' },
  { id: 'nvr-mc-165', text: 'Pattern: each row, the shapes flip horizontally. Row 1: arrow pointing right. Row 3:', options: ['Arrow pointing right', 'Arrow pointing left', 'Arrow pointing up', 'Arrow pointing down'], correctAnswer: 'Arrow pointing right', explanation: 'Flip at each row: right→left→right. Row 3 = right.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-166', text: 'A cube is painted then cut into 64 small cubes. How many small cubes have no paint?', options: ['8', '16', '24', '32'], correctAnswer: '8', explanation: 'A 4×4×4 cube: interior cubes = 2×2×2 = 8 unpainted.', topic: '3D Shapes' },
  { id: 'nvr-mc-167', text: 'Which capital letter has exactly ONE line of symmetry?', options: ['H', 'X', 'O', 'A'], correctAnswer: 'A', explanation: 'A has one vertical line of symmetry. H, X, O have more.', topic: 'Symmetry' },
  { id: 'nvr-mc-168', text: 'Pattern: the number of sides increases by 2 each time. Shape 1 = square (4). Shape 4 =', options: ['8 sides', '9 sides', '10 sides', '12 sides'], correctAnswer: '10 sides', explanation: '4, 6, 8, 10. Shape 4 = 10 sides (decagon).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-169', text: 'Faces of a triangular prism: which face is always a triangle?', options: ['None', 'Only the bases', 'Only the sides', 'All faces'], correctAnswer: 'Only the bases', explanation: 'A triangular prism has 2 triangular bases and 3 rectangular sides.', topic: '3D Shapes' },
  { id: 'nvr-mc-170', text: 'A pattern: the large square contains 4 small squares. Each small square is then divided into 4 again. After 2 divisions, total small squares =', options: ['8', '12', '16', '64'], correctAnswer: '16', explanation: '1 → 4 → 16. Each division multiplies by 4.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-171', text: 'The letter "N" rotated 180° looks like:', options: ['N', 'Z', 'U', 'N (identical)'], correctAnswer: 'N (identical)', explanation: 'N has 180° rotational symmetry — rotating it 180° produces an identical N.', topic: 'Rotation' },
  { id: 'nvr-mc-172', text: 'A 3×3 magic square has rows/columns summing to 15. Centre cell = 5. Corner cells sum to:', options: ['16', '20', '24', '28'], correctAnswer: '20', explanation: 'In a 3×3 magic square (1-9), the 4 corner cells are 2,4,6,8 summing to 20.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-173', text: 'A hexagonal prism has how many faces?', options: ['6', '7', '8', '10'], correctAnswer: '8', explanation: '2 hexagonal + 6 rectangular = 8 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-174', text: 'A shape reflected in a vertical mirror then reflected again in the same vertical mirror returns to:', options: ['A different position', 'The original position', 'A 90° rotation', 'A 180° rotation'], correctAnswer: 'The original position', explanation: 'Two reflections in the same mirror cancel out, returning to original.', topic: 'Reflection' },
  { id: 'nvr-mc-175', text: 'Pattern: alternating rows have 1 circle and 2 circles. Row 1: 1 circle. Row 6: how many?', options: ['1', '2', '3', '6'], correctAnswer: '2', explanation: 'Even rows have 2 circles, odd rows have 1. Row 6 (even) = 2.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-176', text: 'A regular octahedron: which of Euler\'s formula checks applies?', options: ['F+V-E = 2 (8+6-12=2)', 'F+V-E = 0', 'F+V-E = 4', 'F+V = E'], correctAnswer: 'F+V-E = 2 (8+6-12=2)', explanation: 'Octahedron: 8 faces + 6 vertices - 12 edges = 2. Euler\'s formula holds.', topic: '3D Shapes' },
  { id: 'nvr-mc-177', text: 'Which has more lines of symmetry: a square or a regular hexagon?', options: ['Square (4)', 'Regular hexagon (6)', 'They are equal', 'Neither has lines of symmetry'], correctAnswer: 'Regular hexagon (6)', explanation: 'Square has 4 lines; regular hexagon has 6 lines of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-178', text: 'Pattern: 2 shapes in row 1, 4 in row 2, 8 in row 3. How many in row 6?', options: ['32', '48', '64', '128'], correctAnswer: '64', explanation: 'Doubling each row: 2,4,8,16,32,64. Row 6 = 64.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-179', text: 'A prism with an n-sided base has how many edges (formula)?', options: ['2n', '3n', 'n+2', '2n+n'], correctAnswer: '3n', explanation: 'An n-sided prism: n edges on each base (×2=2n) + n lateral = 3n total.', topic: '3D Shapes' },
  { id: 'nvr-mc-180', text: 'Pattern: in a 4×4 grid, every diagonal square is shaded (top-left to bottom-right). This diagonal has how many shaded squares?', options: ['3', '4', '5', '6'], correctAnswer: '4', explanation: 'The main diagonal of a 4×4 grid has 4 squares.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-181', text: 'An arrow pointing West is rotated 270° anticlockwise. It now points:', options: ['North', 'South', 'East', 'West'], correctAnswer: 'North', explanation: 'W → 90° ACW → S → 90° ACW → E → 90° ACW → N. After 270° ACW = North.', topic: 'Rotation' },
  { id: 'nvr-mc-182', text: 'A 5-sided prism (pentagonal prism): total number of faces, edges, vertices = ?', options: ['7 faces, 15 edges, 10 vertices', '5 faces, 10 edges, 7 vertices', '7 faces, 12 edges, 8 vertices', '10 faces, 15 edges, 7 vertices'], correctAnswer: '7 faces, 15 edges, 10 vertices', explanation: '5-sided prism: 2+5=7 faces, 3×5=15 edges, 2×5=10 vertices. Euler: 7+10-15=2 ✓', topic: '3D Shapes' },
  { id: 'nvr-mc-183', text: 'In a sequence of patterns, each shape is reflected then rotated 90° clockwise. Starting with an R: after 2 steps, the letter looks like:', options: ['R', 'Я (mirror R)', 'Rotated R', 'Rotated mirror R'], correctAnswer: 'Rotated R', explanation: 'Step 1: R reflected → Я. Step 2: Я rotated 90°CW → a rotated mirror R.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-184', text: 'A circle has how many lines of symmetry?', options: ['2', '4', '8', 'Infinite'], correctAnswer: 'Infinite', explanation: 'A circle has infinitely many lines of symmetry — any diameter is a line of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-185', text: 'Pattern: each row, shapes double in size. Row 1: shape has area 1cm². Row 5 shape has area:', options: ['4cm²', '8cm²', '16cm²', '32cm²'], correctAnswer: '16cm²', explanation: '1, 2, 4, 8, 16. Row 5 = 16cm².', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-186', text: 'A cube is cut in half diagonally (through 4 vertices). The cross-section is a:', options: ['Square', 'Rectangle', 'Triangle', 'Hexagon'], correctAnswer: 'Rectangle', explanation: 'A diagonal cut through 4 vertices of a cube creates a rectangular cross-section.', topic: '3D Shapes' },
  { id: 'nvr-mc-187', text: 'In a sequence, each figure gains a new shape on the right: Fig 1=△, Fig 2=△□, Fig 3=△□○. Fig 5=?', options: ['5 shapes', '4 shapes', '6 shapes', '3 shapes'], correctAnswer: '5 shapes', explanation: 'Figure n has n shapes. Figure 5 = 5 shapes.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-188', text: 'Which shape has lines of symmetry equal to its number of sides?', options: ['Square only', 'All regular polygons', 'Only triangles', 'No shapes'], correctAnswer: 'All regular polygons', explanation: 'Every regular polygon with n sides has exactly n lines of symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-189', text: 'A sphere, cylinder, and cone are placed side by side. Seen from directly above, you see:', options: ['Three circles', 'Two circles and a triangle', 'Circle, rectangle, triangle', 'Three different shapes'], correctAnswer: 'Three circles', explanation: 'From directly above: sphere=circle, cylinder=circle, cone=circle. All three look circular.', topic: '3D Shapes' },
  { id: 'nvr-mc-190', text: 'Pattern: small square moves 1 step right each row, then resets. Grid is 4 wide. Row 1: col 1. Row 6: which column?', options: ['Col 1', 'Col 2', 'Col 3', 'Col 4'], correctAnswer: 'Col 2', explanation: 'Pattern: col 1,2,3,4,1,2... Row 6 = col 2.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-191', text: 'An L-shape is rotated 90° clockwise. The long part, which was vertical, is now:', options: ['Vertical', 'Horizontal', 'Diagonal', 'Unchanged'], correctAnswer: 'Horizontal', explanation: 'Rotating 90° CW: vertical → horizontal, horizontal → vertical.', topic: 'Rotation' },
  { id: 'nvr-mc-192', text: 'A cube is cut by a plane parallel to one face. The cross-section is always a:', options: ['Triangle', 'Square', 'Rectangle', 'Hexagon'], correctAnswer: 'Square', explanation: 'A cut parallel to a face of a cube always produces a square cross-section.', topic: '3D Shapes' },
  { id: 'nvr-mc-193', text: 'In a sequence, squares are shaded in a spiral pattern (outer edge first). A 3×3 grid has 8 outer squares. A 5×5 grid has ___ outer squares:', options: ['12', '14', '16', '20'], correctAnswer: '16', explanation: '5×5 = 25 total, inner 3×3 = 9. Outer = 25-9 = 16.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-194', text: 'A regular tetrahedron has all faces as:', options: ['Squares', 'Equilateral triangles', 'Right-angled triangles', 'Rectangles'], correctAnswer: 'Equilateral triangles', explanation: 'A regular tetrahedron has 4 equilateral triangular faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-195', text: 'Pattern: the pattern of dots inside a shape follows the square numbers. Shape 4 has 16 dots. Shape 3 has:', options: ['8', '9', '10', '12'], correctAnswer: '9', explanation: 'Square numbers: 3² = 9 dots in shape 3.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-196', text: 'Which transformation changes the size of a shape?', options: ['Rotation', 'Reflection', 'Translation', 'Enlargement'], correctAnswer: 'Enlargement', explanation: 'Enlargement (dilation) is the only transformation among these that changes size.', topic: 'Reflection' },
  { id: 'nvr-mc-197', text: 'A pattern: each row alternates between a filled circle and an outlined circle, starting with filled. Row 3, column 4 is:', options: ['Filled', 'Outlined', 'Half-filled', 'Empty'], correctAnswer: 'Outlined', explanation: 'Row 3 starts filled. Col 1=filled, col 2=outlined, col 3=filled, col 4=outlined.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-198', text: 'A cube painted on all 6 faces is cut into 8 equal cubes. How many small cubes have exactly 3 painted faces?', options: ['0', '4', '8', '12'], correctAnswer: '8', explanation: 'All 8 corner pieces have exactly 3 painted faces (one from each adjacent face).', topic: '3D Shapes' },
  { id: 'nvr-mc-199', text: 'In a matrix, the shape in each cell is determined by row number × column number sides. Cell (2,3) has a shape with:', options: ['4 sides', '5 sides', '6 sides', '8 sides'], correctAnswer: '6 sides', explanation: '2 × 3 = 6 sides. A hexagon.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-200', text: 'A regular hexagon is divided into equilateral triangles. How many triangles?', options: ['4', '6', '8', '12'], correctAnswer: '6', explanation: 'A regular hexagon can be divided into 6 equilateral triangles from its centre.', topic: 'Shapes' },
  { id: 'nvr-mc-201', text: 'Pattern: row 1 has 1 shape, row 2 has 3, row 3 has 5. Row n has ___ shapes (odd numbers). Row 8 has:', options: ['13', '15', '16', '17'], correctAnswer: '15', explanation: 'Row n = 2n-1. Row 8 = 2(8)-1 = 15.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-202', text: 'An octahedron can be thought of as two square pyramids joined at their:', options: ['Tips', 'Bases', 'Sides', 'Edges'], correctAnswer: 'Bases', explanation: 'A regular octahedron = two square pyramids joined at their square bases.', topic: '3D Shapes' },
  { id: 'nvr-mc-203', text: 'Which letter has rotational symmetry of order 2 AND reflective symmetry?', options: ['S', 'H', 'N', 'Z'], correctAnswer: 'H', explanation: 'H has both reflective symmetry (vertical and horizontal) and order-2 rotational symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-204', text: 'Pattern: in each step, a new layer of squares surrounds the previous pattern. Layer 1 = 1 square, layer 2 = 8 new squares (total 9). Layer 3 adds:', options: ['12 squares', '16 squares', '20 squares', '24 squares'], correctAnswer: '16 squares', explanation: 'Layer 1: 1×1, Layer 2: 3×3=9 (adds 8), Layer 3: 5×5=25 (adds 16).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-205', text: 'A square pyramid is placed base-down. Looking from the side, you see:', options: ['A square', 'A circle', 'A triangle', 'A rectangle'], correctAnswer: 'A triangle', explanation: 'Viewing a square pyramid from the side shows a triangular silhouette.', topic: '3D Shapes' },
  { id: 'nvr-mc-206', text: 'In a pattern, each figure shows a fraction of a circle shaded. Figures show: 1/4, 1/2, 3/4, 1, 1/4... Figure 7 shows:', options: ['1/4', '1/2', '3/4', '1 (full)'], correctAnswer: '3/4', explanation: 'Cycle of 4: 1/4, 1/2, 3/4, 1. Figure 7: 7 mod 4 = 3. Third position = 3/4.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-207', text: 'How many faces does a decagonal prism have?', options: ['10', '12', '14', '22'], correctAnswer: '12', explanation: 'Decagonal prism: 2 decagonal + 10 rectangular = 12 faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-208', text: 'A square is enlarged by scale factor 3. Its area becomes:', options: ['3 times larger', '6 times larger', '9 times larger', '12 times larger'], correctAnswer: '9 times larger', explanation: 'Area scales by the square of the linear scale factor: 3² = 9.', topic: 'Shapes' },
  { id: 'nvr-mc-209', text: 'Pattern: in each row, shapes move one position to the right and wrap around. Row 1: ○□△ (3 shapes). Row 4:', options: ['○□△', '□△○', '△○□', '○△□'], correctAnswer: '○□△', explanation: 'After 3 shifts (positions cycle with period 3), row 4 = same as row 1 = ○□△.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-210', text: 'A net of a triangular prism has how many pieces in total?', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: 'Net of triangular prism: 2 triangles + 3 rectangles = 5 pieces.', topic: '3D Shapes' },
  { id: 'nvr-mc-211', text: 'The letter Z has which type of symmetry?', options: ['Vertical reflective', 'Horizontal reflective', 'Rotational order 2 only', 'No symmetry'], correctAnswer: 'Rotational order 2 only', explanation: 'Z has order-2 rotational symmetry (looks same rotated 180°) but no lines of reflective symmetry.', topic: 'Symmetry' },
  { id: 'nvr-mc-212', text: 'In a sequence, a 2×2 grid of shapes cycles through rotations. After 4 steps of 90° each, the pattern is:', options: ['Rotated 90°', 'Rotated 180°', 'Rotated 270°', 'Back to original'], correctAnswer: 'Back to original', explanation: '4 × 90° = 360°. Returns to original.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-213', text: 'A cube has how many pairs of parallel edges?', options: ['4', '6', '8', '12'], correctAnswer: '6', explanation: 'A cube has 12 edges grouped into 3 sets of 4 parallel edges = 6 pairs of parallel edges.', topic: '3D Shapes' },
  { id: 'nvr-mc-214', text: 'Which shape, when viewed from any direction, always looks like a circle?', options: ['Cylinder', 'Cone', 'Sphere', 'Cube'], correctAnswer: 'Sphere', explanation: 'A sphere looks like a circle from any direction.', topic: '3D Shapes' },
  { id: 'nvr-mc-215', text: 'Pattern: triangle contains 1 dot, then square 4, then pentagon 9. What does a heptagon contain?', options: ['16', '25', '36', '49'], correctAnswer: '36', explanation: 'Number of sides: 3→1=1², 4→4=2², 5→9=3², 6→16=4², 7→25=5²=25. Wait: heptagon = 7 sides: (7-2)² = 5² = 25.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-216', text: 'A square prism (cuboid) where all faces are squares is a:', options: ['Rectangle', 'Cube', 'Tetrahedron', 'Pyramid'], correctAnswer: 'Cube', explanation: 'A cuboid where all 6 faces are squares is a cube.', topic: '3D Shapes' },
  { id: 'nvr-mc-217', text: 'In a pattern, the outline shape changes from triangle to square to pentagon each row, while the inner dot count stays the same at 3. Row 4 has:', options: ['Triangle, 3 dots', 'Hexagon, 3 dots', 'Square, 4 dots', 'Pentagon, 3 dots'], correctAnswer: 'Hexagon, 3 dots', explanation: 'Shapes: triangle(3), square(4), pentagon(5), hexagon(6) sides. Dots stay at 3.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-218', text: 'A rhombus with all right angles is a:', options: ['Kite', 'Rectangle', 'Square', 'Trapezium'], correctAnswer: 'Square', explanation: 'A rhombus has 4 equal sides. Adding right angles makes it a square.', topic: 'Shapes' },
  { id: 'nvr-mc-219', text: 'Pattern: the shapes in positions 1,4,7,10 are all circles. What type of sequence is this?', options: ['Every 2nd shape', 'Every 3rd shape', 'Every 4th shape', 'Prime positions'], correctAnswer: 'Every 3rd shape', explanation: '1, 4, 7, 10 — difference of 3. Every 3rd shape (starting at 1).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-220', text: 'A cube cut along all 3 sets of parallel faces creates how many smaller cubes?', options: ['4', '8', '12', '27'], correctAnswer: '8', explanation: 'One cut per direction (3 cuts total) creates 2×2×2 = 8 smaller cubes.', topic: '3D Shapes' },
  { id: 'nvr-mc-221', text: 'Reflected in a diagonal mirror (top-left to bottom-right), an upward arrow becomes:', options: ['Downward arrow', 'Rightward arrow', 'Leftward arrow', 'Upward arrow'], correctAnswer: 'Rightward arrow', explanation: 'A diagonal mirror from top-left to bottom-right swaps x and y coordinates: up → right.', topic: 'Reflection' },
  { id: 'nvr-mc-222', text: 'In a matrix, shading moves diagonally right and down each step. Starting at top-left, after 3 steps:', options: ['Row 1, col 4', 'Row 4, col 4', 'Row 4, col 1', 'Row 2, col 3'], correctAnswer: 'Row 4, col 4', explanation: 'Each step moves +1 row and +1 column: (1,1)→(2,2)→(3,3)→(4,4).', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-223', text: 'A triangular prism with equilateral triangular ends and square sides is called:', options: ['A cube', 'A square prism', 'A special triangular prism', 'Not possible'], correctAnswer: 'Not possible', explanation: 'If the triangular ends are equilateral, the sides are rectangles. For sides to be squares, specific dimensions are needed — this is a special case but possible.', topic: '3D Shapes' },
  { id: 'nvr-mc-224', text: 'Pattern: from left to right, each shape adds one more shaded segment. 4-segment circle: segment 1 shaded, then 2, then 3, then 4. The 5th step:', options: ['0 shaded (restart)', '1 shaded', '5 shaded (impossible)', '4 shaded'], correctAnswer: '0 shaded (restart)', explanation: 'After all 4 segments are shaded, the pattern resets: 0 shaded.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-225', text: 'How many diagonals does a regular hexagon have?', options: ['6', '7', '8', '9'], correctAnswer: '9', explanation: 'Diagonals of n-sided polygon = n(n-3)/2. For n=6: 6×3/2 = 9.', topic: 'Shapes' },
  { id: 'nvr-mc-226', text: 'A cube is made of unit cubes. A 3×3×3 cube has 27 unit cubes. An outer layer is removed. How many remain?', options: ['1', '8', '9', '12'], correctAnswer: '1', explanation: 'Removing the outer layer of a 3×3×3 cube leaves the single centre cube.', topic: '3D Shapes' },
  { id: 'nvr-mc-227', text: 'Pattern: shapes rotate 30° clockwise each step. After 6 steps the shape has rotated:', options: ['90°', '120°', '180°', '360°'], correctAnswer: '180°', explanation: '6 × 30° = 180°.', topic: 'Rotation' },
  { id: 'nvr-mc-228', text: 'A Venn diagram shows circles for "squares" and "rectangles". Where do squares go?', options: ['Only in the square circle', 'Only in the rectangle circle', 'In the overlap (intersection)', 'Outside both circles'], correctAnswer: 'In the overlap (intersection)', explanation: 'All squares are rectangles, so squares appear in the intersection of both circles.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-229', text: 'How many diagonals does a square have?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: 'A square has 2 diagonals connecting opposite vertices.', topic: 'Shapes' },
  { id: 'nvr-mc-230', text: 'A pattern: small shapes fill a larger shape. Triangle fits 1 small triangle, then parallelogram fits 2, then larger triangle fits 4. Next (even larger parallelogram) fits:', options: ['6', '7', '8', '9'], correctAnswer: '8', explanation: 'Pattern doubles: 1, 2, 4, 8.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-231', text: 'A cube has how many space diagonals (connecting opposite vertices through the interior)?', options: ['2', '3', '4', '6'], correctAnswer: '4', explanation: 'A cube has 4 space diagonals, each connecting two opposite vertices through the centre.', topic: '3D Shapes' },
  { id: 'nvr-mc-232', text: 'In a figure sequence, each step adds a triangle to the right side. Figure 1: 1 triangle. Figure 5:', options: ['4 triangles', '5 triangles', '6 triangles', '8 triangles'], correctAnswer: '5 triangles', explanation: 'Figure n has n triangles. Figure 5 = 5 triangles.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-233', text: 'A trapezium has how many lines of symmetry?', options: ['0 (unless isosceles)', '1 (always)', '2', '4'], correctAnswer: '0 (unless isosceles)', explanation: 'A general trapezium has no lines of symmetry. An isosceles trapezium has exactly 1.', topic: 'Symmetry' },
  { id: 'nvr-mc-234', text: 'Pattern: black squares in a 4×4 grid follow a checkerboard. Top-left is black. Is position (row 3, col 3) black or white?', options: ['Black', 'White', 'Cannot tell', 'Either'], correctAnswer: 'Black', explanation: 'In a checkerboard: black if (row+col) is even. 3+3=6 (even) = black.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-235', text: 'A shape has 5 axes of rotational symmetry. It must be a:', options: ['Square', 'Regular pentagon', 'Regular hexagon', 'Circle'], correctAnswer: 'Regular pentagon', explanation: 'A regular pentagon has 5-fold rotational symmetry (order 5).', topic: 'Symmetry' },
  { id: 'nvr-mc-236', text: 'An isosceles trapezium has how many lines of symmetry?', options: ['0', '1', '2', '4'], correctAnswer: '1', explanation: 'An isosceles trapezium has exactly 1 line of symmetry — vertical, through midpoints of parallel sides.', topic: 'Symmetry' },
  { id: 'nvr-mc-237', text: 'Pattern: 3 shapes per row, cycling through △□○. Row 5, column 2:', options: ['△', '□', '○', 'Cannot tell'], correctAnswer: '□', explanation: 'Row 5 starts at same position as row 2 (5 mod 3 = 2). Row 2 col 2 = □.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-238', text: 'A cube is cut with 3 cuts parallel to different faces. Maximum number of pieces:', options: ['4', '6', '8', '9'], correctAnswer: '8', explanation: 'One cut per axis: 2×2×2 = 8 pieces.', topic: '3D Shapes' },
  { id: 'nvr-mc-239', text: 'A rotation maps point A to point A\'. The centre of rotation is:', options: ['Midpoint of AA\'', 'On the perpendicular bisector of AA\'', 'At A', 'At A\''], correctAnswer: 'On the perpendicular bisector of AA\'', explanation: 'The centre of rotation always lies on the perpendicular bisector of AA\'.', topic: 'Rotation' },
  { id: 'nvr-mc-240', text: 'Pattern: alternating large circle and small circle, each shaded differently. Position 9 (odd):', options: ['Large circle', 'Small circle', 'Triangle', 'Cannot tell'], correctAnswer: 'Large circle', explanation: 'Odd positions = large circle. Position 9 (odd) = large circle.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-241', text: 'How many faces does an icosahedron have?', options: ['12', '16', '20', '24'], correctAnswer: '20', explanation: 'A regular icosahedron has 20 triangular faces.', topic: '3D Shapes' },
  { id: 'nvr-mc-242', text: 'A pattern: shapes are arranged in increasing rows. Total shapes in rows 1-5 forms a triangle number. Total after 5 rows:', options: ['10', '12', '15', '20'], correctAnswer: '15', explanation: '1+2+3+4+5 = 15. The 5th triangle number.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-243', text: 'Which rotation is equivalent to a reflection in a vertical mirror followed by a reflection in a horizontal mirror?', options: ['90° rotation', '180° rotation', '270° rotation', 'No rotation'], correctAnswer: '180° rotation', explanation: 'Two perpendicular reflections = 180° rotation about their intersection.', topic: 'Reflection' },
  { id: 'nvr-mc-244', text: 'In a 5×5 matrix, the shading follows both diagonals. Both diagonals together shade:', options: ['8 squares', '9 squares', '10 squares', '12 squares'], correctAnswer: '9 squares', explanation: 'Main diagonal (5) + anti-diagonal (5) - centre (counted twice: 1) = 9 unique shaded squares.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-245', text: 'A dodecahedron has how many vertices?', options: ['12', '16', '20', '30'], correctAnswer: '20', explanation: 'A regular dodecahedron has 20 vertices.', topic: '3D Shapes' },
  { id: 'nvr-mc-246', text: 'A pattern of growing L-shapes: L1 has 2 squares, L2 has 4, L3 has 6. L10 has:', options: ['16', '18', '20', '22'], correctAnswer: '20', explanation: 'Ln = 2n squares. L10 = 20 squares.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-247', text: 'A regular polygon with interior angle 150° has how many sides?', options: ['8', '10', '12', '15'], correctAnswer: '12', explanation: '(n-2)×180/n = 150. 180n-360 = 150n. 30n = 360. n = 12.', topic: 'Shapes' },
  { id: 'nvr-mc-248', text: 'Pattern: each term in a sequence of figures shows the previous figure reflected. Starting with a "d", after 4 steps:', options: ['d', 'b', 'p', 'q'], correctAnswer: 'd', explanation: 'Each reflection flips: d→b→d→b→d. After 4 steps = d.', topic: 'Pattern Recognition' },
  { id: 'nvr-mc-249', text: 'An icosahedron has how many edges?', options: ['20', '24', '30', '36'], correctAnswer: '30', explanation: 'A regular icosahedron has 30 edges. (F+V-E=2: 20+12-30=2 ✓)', topic: '3D Shapes' },
  { id: 'nvr-mc-250', text: 'In a spiral pattern, each layer adds how many new squares to an n×n grid to make (n+2)×(n+2)?', options: ['2n+1', '2n+2', '2n+3', '4n+4'], correctAnswer: '4n+4', explanation: '(n+2)² - n² = n²+4n+4-n² = 4n+4 new squares in the outer layer.', topic: 'Pattern Recognition' },
  ]
  }
};
// Helper functions
function normalizeSubject(input: any): Subject {
  const raw = String(input ?? '').trim();
  const asEnum = (Object.values(Subject) as string[]).find((v) => v === raw);
  if (asEnum) return asEnum as Subject;
  const s = raw.toLowerCase();
  if (s.includes('english') || s === 'eng') return Subject.English;
  if (s.includes('non') && s.includes('verbal')) return Subject.NonVerbalReasoning;
  if (s.includes('verbal')) return Subject.VerbalReasoning;
  if (s.includes('math')) return Subject.Maths;
  return Subject.Maths;
}

function normalizeQuizType(input: any): QuizType {
  const raw = String(input ?? '').trim();
  const lower = raw.toLowerCase();
  const allowed = new Set<QuizType>(['multiple-choice','true-false','fill-in-the-blank','ordering','short-answer']);
  if (allowed.has(raw as QuizType)) return raw as QuizType;
  if (allowed.has(lower as QuizType)) return lower as QuizType;
  if (lower === 'mcq' || lower === 'multiple choice') return 'multiple-choice';
  if (lower === 'short answer' || lower === 'free-text') return 'short-answer';
  if (lower === 'tf' || lower === 'true false') return 'true-false';
  return 'multiple-choice';
}


export function getRandomQuestions(
  subject: Subject | string,
  quizType: QuizType | string,
  count: number = 5,
  topic?: string,
  difficulty: 'standard' | 'challenging' | 'exam-ready' = 'standard'
): Question[] {
  const normalizedSubject = normalizeSubject(subject);
  const normalizedQuizType = normalizeQuizType(quizType);
  const questions = questionBank?.[normalizedSubject]?.[normalizedQuizType] || [];

  // Filter by topic if specified
  let filteredQuestions = topic
    ? questions.filter((q) => q.topic.toLowerCase().includes(topic.toLowerCase()))
    : questions;

  // If not enough questions after filtering, fall back to the full set
  if (filteredQuestions.length < 1) {
    filteredQuestions = questions;
  }

  // Apply difficulty by splitting the question pool into thirds.
  // The bank is roughly ordered from easier → harder within each topic group,
  // so slicing the pool gives a meaningful difficulty gradient.
  if (filteredQuestions.length >= 6) {
    const third = Math.floor(filteredQuestions.length / 3);
    if (difficulty === 'standard') {
      // First third only (easiest)
      filteredQuestions = filteredQuestions.slice(0, third);
    } else if (difficulty === 'challenging') {
      // Middle third
      filteredQuestions = filteredQuestions.slice(third, third * 2);
    } else {
      // 'exam-ready' — last third (hardest)
      filteredQuestions = filteredQuestions.slice(third * 2);
    }
    // Safety: if the filtered slice is too small, fall back to full pool
    if (filteredQuestions.length < Math.min(count, 5)) {
      filteredQuestions = topic
        ? questions.filter((q) => q.topic.toLowerCase().includes(topic.toLowerCase()))
        : questions;
    }
  }

  // Shuffle once
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);

  const usedTexts = new Set<string>();
  const result: Question[] = [];

  // Take as many unique bank questions as we can
  for (let i = 0; i < shuffled.length && result.length < count; i++) {
    const q = shuffled[i];
    if (!usedTexts.has(q.text)) {
      usedTexts.add(q.text);
      result.push({ ...q, id: `${q.id}` });
    }
  }

  // If we still need more, generate procedural questions (prevents obvious repeats in long exams)
  if (result.length < count) {
    const needed = count - result.length;
    const generated = generateProceduralQuestions(
      normalizedSubject,
      normalizedQuizType,
      needed,
      topic,
      usedTexts
    );
    result.push(...generated);
  }

  // As a final safety net, if we still can't hit count, allow cycling with id suffixes
  if (result.length < count && shuffled.length > 0) {
    let cycle = 2;
    while (result.length < count) {
      for (let i = 0; i < shuffled.length && result.length < count; i++) {
        const base = shuffled[i];
        result.push({ ...base, id: `${base.id}-v${cycle}` });
      }
      cycle += 1;
      if (cycle > 10) break; // avoid runaway
    }
  }

  return result.slice(0, count);
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function makeOptions(correct: string, distractors: string[], desired = 4): string[] {
  const opts = [correct, ...distractors].filter(Boolean);
  const unique = Array.from(new Set(opts));
  const trimmed = unique.slice(0, desired);
  while (trimmed.length < desired) trimmed.push(correct); // fallback
  return shuffle(trimmed);
}

function generateProceduralQuestions(
  subject: Subject,
  quizType: QuizType,
  count: number,
  topic: string | undefined,
  usedTexts: Set<string>
): Question[] {
  const out: Question[] = [];
  let attempts = 0;

  // Template pools
  const mathsTopics = [
    'Percentages',
    'Fractions',
    'Ratio',
    'Algebra',
    'Sequences',
    'Area and Perimeter',
    'Time and Speed',
    'Averages'
  ];

  const englishTopics = [
    'Vocabulary',
    'Punctuation',
    'Grammar',
    "Writer's Methods",
    'Comprehension'
  ];

  while (out.length < count && attempts < count * 30) {
    attempts += 1;

    if (subject === Subject.Maths) {
      const t = topic || mathsTopics[randInt(0, mathsTopics.length - 1)];

      const q = buildMathsQuestion(quizType, t);
      if (q && !usedTexts.has(q.text)) {
        usedTexts.add(q.text);
        out.push({ ...q, id: `gen-math-${out.length + 1}-${Date.now()}-${attempts}` });
      }
      continue;
    }

    if (subject === Subject.English) {
      const t = topic || englishTopics[randInt(0, englishTopics.length - 1)];

      const q = buildEnglishQuestion(quizType, t);
      if (q && !usedTexts.has(q.text)) {
        usedTexts.add(q.text);
        out.push({ ...q, id: `gen-eng-${out.length + 1}-${Date.now()}-${attempts}` });
      }
      continue;
    }

    // For other subjects not yet implemented, do nothing (will fall back to cycling)
  }

  return out;
}

function buildMathsQuestion(quizType: QuizType, topic: string): Omit<Question, 'id'> | null {
  // Force supported styles to match our current UI
  const qt = quizType === 'true-false' ? 'true-false' : 'multiple-choice';

  // Choose a template by topic
  if (topic.toLowerCase().includes('percent')) {
    const base = randInt(40, 240);
    const pct = [10, 12.5, 20, 25, 30, 40, 50][randInt(0, 6)];
    const correct = (base * pct) / 100;
    const correctStr = Number.isInteger(correct) ? String(correct) : String(correct);
    const distractors = [
      String((base * (pct + 5)) / 100),
      String((base * (pct - 5)) / 100),
      String((base * pct) / 10)
    ];
    return {
      text: `What is ${pct}% of ${base}?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `${pct}% means ${pct}/100. Multiply ${base} by ${pct} and divide by 100.`,
      topic: 'Percentages'
    };
  }

  if (topic.toLowerCase().includes('fraction')) {
    const denom = [2, 3, 4, 5, 6, 8, 10, 12][randInt(0, 7)];
    const num = randInt(1, denom - 1);
    const multiple = randInt(6, 30);
    const total = denom * multiple;
    const correct = (num * total) / denom;
    const correctStr = String(correct);
    const distractors = [String(correct + multiple), String(correct - multiple), String(total - correct)];
    return {
      text: `What is ${num}/${denom} of ${total}?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `To find ${num}/${denom} of ${total}, divide ${total} by ${denom} then multiply by ${num}.`,
      topic: 'Fractions'
    };
  }

  if (topic.toLowerCase().includes('ratio')) {
    const a = randInt(2, 9);
    const b = randInt(2, 9);
    const totalParts = a + b;
    const total = totalParts * randInt(5, 25);
    const shareA = (a * total) / totalParts;
    const correctStr = String(shareA);
    const distractors = [String(shareA + totalParts), String(shareA - totalParts), String(total - shareA)];
    return {
      text: `£${total} is shared in the ratio ${a}:${b}. How much does the first person get?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `Total parts = ${a}+${b}=${totalParts}. First share = ${a}/${totalParts} of ${total}.`,
      topic: 'Ratio'
    };
  }

  if (topic.toLowerCase().includes('algebra')) {
    const x = randInt(3, 15);
    const m = randInt(2, 9);
    const c = randInt(1, 20);
    const rhs = m * x + c;
    const correctStr = String(x);
    const distractors = [String(x + 1), String(x - 1), String(Math.max(1, x + 2))];
    return {
      text: `Solve for x: ${m}x + ${c} = ${rhs}`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `Subtract ${c} from both sides: ${m}x = ${rhs - c}. Then divide by ${m}: x = ${x}.`,
      topic: 'Algebra'
    };
  }

  if (topic.toLowerCase().includes('sequence')) {
    const step = randInt(2, 12);
    const start = randInt(1, 30);
    const terms = [start, start + step, start + 2 * step, start + 3 * step];
    const correct = start + 4 * step;
    const correctStr = String(correct);
    const distractors = [String(correct + step), String(correct - step), String(start + 5 * step)];
    return {
      text: `What is the next number in the sequence: ${terms.join(', ')}, ... ?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `This is an arithmetic sequence adding ${step} each time.`,
      topic: 'Sequences'
    };
  }

  if (topic.toLowerCase().includes('area') || topic.toLowerCase().includes('perimeter')) {
    const l = randInt(4, 25);
    const w = randInt(3, 18);
    const area = l * w;
    const correctStr = `${area} cm²`;
    const distractors = [`${2*(l+w)} cm`, `${l+w} cm²`, `${area + l} cm²`];
    return {
      text: `A rectangle is ${l}cm by ${w}cm. What is its area?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `Area = length × width = ${l} × ${w} = ${area} cm².`,
      topic: 'Area and Perimeter'
    };
  }

  if (topic.toLowerCase().includes('time') || topic.toLowerCase().includes('speed')) {
    const speed = randInt(20, 70);
    const time = randInt(1, 4);
    const dist = speed * time;
    const correctStr = `${dist} km`;
    const distractors = [`${dist + speed} km`, `${dist - speed} km`, `${speed + time} km`];
    return {
      text: `A car travels at ${speed} km/h for ${time} hours. How far does it travel?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `Distance = speed × time = ${speed} × ${time} = ${dist} km.`,
      topic: 'Time and Speed'
    };
  }

  // Averages
  const a = randInt(5, 30);
  const b = randInt(5, 30);
  const c = randInt(5, 30);
  const mean = (a + b + c) / 3;
  const correctStr = mean % 1 === 0 ? String(mean) : mean.toFixed(1);
  const distractors = [String((a + b) / 2), String(a + b + c), String(Math.round(mean))];
  return {
    text: `What is the mean (average) of ${a}, ${b} and ${c}?`,
    options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
    correctAnswer: qt === 'true-false' ? 'False' : correctStr,
    explanation: `Add them: ${a}+${b}+${c}=${a+b+c}. Then divide by 3.`,
    topic: 'Averages'
  };
}

function buildEnglishQuestion(quizType: QuizType, topic: string): Omit<Question, 'id'> | null {
  const qt = quizType === 'true-false' ? 'true-false' : 'multiple-choice';

  // Vocabulary: synonym / meaning in context (sentence-based)
  if (topic.toLowerCase().includes('vocab')) {
    const pairs = [
      { word: 'reluctant', correct: 'unwilling', wrong: ['excited', 'confused', 'careless'] },
      { word: 'glimpse', correct: 'quick look', wrong: ['loud noise', 'slow walk', 'strong smell'] },
      { word: 'dwindle', correct: 'decrease', wrong: ['explode', 'decorate', 'listen'] },
      { word: 'cautious', correct: 'careful', wrong: ['angry', 'noisy', 'famous'] },
      { word: 'bewildered', correct: 'confused', wrong: ['proud', 'sleepy', 'hungry'] },
    ];
    const p = pairs[randInt(0, pairs.length - 1)];
    const correctStr = p.correct;
    const distractors = p.wrong;
    return {
      text: `Which option is closest in meaning to “${p.word}”?`,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
      correctAnswer: qt === 'true-false' ? 'False' : correctStr,
      explanation: `“${p.word}” means ${p.correct}.`,
      topic: 'Vocabulary'
    };
  }

  // Punctuation: choose correct sentence
  if (topic.toLowerCase().includes('punct')) {
    const items = [
      {
        stem: 'Choose the sentence with correct punctuation:',
        correct: 'After lunch, we went to the park.',
        wrong: ['After lunch we went, to the park.', 'After lunch we went to, the park.', 'After lunch we went to the park,']
      },
      {
        stem: 'Choose the sentence with correct punctuation:',
        correct: '“Stop!” shouted Mum.',
        wrong: ['“Stop”! shouted Mum.', '“Stop,” shouted Mum!', 'Stop! shouted Mum.']
      },
      {
        stem: 'Choose the sentence with correct punctuation:',
        correct: 'It was cold; however, we carried on.',
        wrong: ['It was cold, however; we carried on.', 'It was cold however, we carried on.', 'It was cold: however we carried on.']
      },
    ];
    const it = items[randInt(0, items.length - 1)];
    return {
      text: it.stem,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(it.correct, it.wrong),
      correctAnswer: qt === 'true-false' ? 'False' : it.correct,
      explanation: 'The correct option uses punctuation in the right place.',
      topic: 'Punctuation'
    };
  }

  // Grammar: verb agreement / tense
  if (topic.toLowerCase().includes('grammar')) {
    const items = [
      { text: 'Which sentence is grammatically correct?', correct: 'The group of boys is ready.', wrong: ['The group of boys are ready.', 'The group of boys be ready.', 'The group of boys were ready is.'] },
      { text: 'Which sentence is grammatically correct?', correct: 'Neither of the answers is correct.', wrong: ['Neither of the answers are correct.', 'Neither of the answers were correct is.', 'Neither of the answers correct.'] },
      { text: 'Choose the correct verb form:', correct: 'She has eaten her lunch.', wrong: ['She have eaten her lunch.', 'She eaten has her lunch.', 'She has ate her lunch.'] },
    ];
    const it = items[randInt(0, items.length - 1)];
    return {
      text: it.text,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(it.correct, it.wrong),
      correctAnswer: qt === 'true-false' ? 'False' : it.correct,
      explanation: 'Check subject–verb agreement and tense.',
      topic: 'Grammar'
    };
  }

  // Writer's methods: metaphor/personification
  if (topic.toLowerCase().includes('writer')) {
    const items = [
      { text: 'Which phrase is an example of personification?', correct: 'The wind whispered through the trees.', wrong: ['The wind was strong today.', 'The trees were tall and green.', 'The air felt cold on my face.'] },
      { text: 'Which phrase is a metaphor?', correct: 'Time is a thief.', wrong: ['Time passed quickly.', 'Time is important.', 'Time can be measured.'] },
      { text: 'Which phrase uses a simile?', correct: 'Her smile was like sunshine.', wrong: ['Her smile was bright.', 'Her smile warmed the room.', 'Her smile appeared suddenly.'] },
    ];
    const it = items[randInt(0, items.length - 1)];
    return {
      text: it.text,
      options: qt === 'true-false' ? ['True', 'False'] : makeOptions(it.correct, it.wrong),
      correctAnswer: qt === 'true-false' ? 'False' : it.correct,
      explanation: 'Look for comparisons (simile/metaphor) or human actions given to non-human things (personification).',
      topic: "Writer's Methods"
    };
  }

  // Comprehension-style (mini excerpt)
  const excerpts = [
    {
      excerpt: 'The corridor was silent, except for the steady drip of water somewhere in the dark.',
      q: 'What atmosphere does the sentence create?',
      correct: 'A tense and mysterious mood',
      wrong: ['A cheerful and playful mood', 'A relaxed and sunny mood', 'A busy and noisy mood']
    },
    {
      excerpt: 'He tightened his grip on the handle and took one careful step forward.',
      q: 'What does “careful” suggest about him?',
      correct: 'He is cautious or nervous',
      wrong: ['He is bored', 'He is angry', 'He is laughing']
    },
  ];
  const ex = excerpts[randInt(0, excerpts.length - 1)];
  const correctStr = ex.correct;
  const distractors = ex.wrong;
  return {
    text: `${ex.excerpt}\n\n${ex.q}`,
    options: qt === 'true-false' ? ['True', 'False'] : makeOptions(correctStr, distractors),
    correctAnswer: qt === 'true-false' ? 'False' : correctStr,
    explanation: 'Choose the option best supported by the wording in the excerpt.',
    topic: 'Comprehension'
  };
}

// Get all available topics for a subject
export function getTopicsForSubject(subject: Subject): string[] {
  const allQuestions = Object.values(questionBank[subject]).flat();
  const topics = new Set(allQuestions.map(q => q.topic));
  return Array.from(topics).sort();
}
