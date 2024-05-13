<template>
    <div>
      <h1>Formulas</h1>
      <div>
        <button class="submit" @click="selectedCategory = 'math'">Math</button>
        <button class="submit" @click="selectedCategory = 'science'">Science</button>
      </div>
      <div v-if="selectedCategory === 'math'">
        <h2>Math Formulas</h2>
        <ul class="formula">
          <li v-for="(formula, index) in mathFormulas" :key="index">{{ formula }}</li>
          <hr>
        </ul>
      </div>
      <div v-else-if="selectedCategory === 'science'">
        <h2>Science Formulas</h2>
        <ul class="formula">
          <li v-for="(formula, index) in scienceFormulas" :key="index">{{ formula }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: '',
        mathFormulas: [
        'Area of Rectangle: Length * Width',
        'Area of Square: Side * Side',
        'Area of Triangle: 0.5 * Base * Height',
        'Area of Circle: π * Radius * Radius',
        'Perimeter of Rectangle: 2 * (Length + Width)',
        'Perimeter of Square: 4 * Side',
        'Perimeter of Triangle: Side1 + Side2 + Side3',
        'Perimeter of Circle: 2 * π * Radius',
        'Volume of Cube: Side * Side * Side',
        'Volume of Cuboid: Length * Width * Height',
        'Volume of Cylinder: π * Radius * Radius * Height',
        'Surface Area of Cube: 6 * Side * Side',
        'Surface Area of Cuboid: 2 * (Length * Width + Width * Height + Height * Length)',
        'Surface Area of Cylinder: 2 * π * Radius * (Radius + Height)',
        'Pythagorean Theorem: a^2 + b^2 = c^2',
        'Quadratic Formula: (-b ± √(b^2 - 4ac)) / 2a',
        'Area of Parallelogram: Base * Height',
        'Area of Trapezium: (Sum of parallel sides) * Height / 2',
        'Area of Rhombus: (Diagonal1 * Diagonal2) / 2',
        'Area of Kite: (Diagonal1 * Diagonal2) / 2',
        'Area of Sector of Circle: (θ/360) * π * Radius^2',
        'Circumference of Circle: 2 * π * Radius',
        'Area of Equilateral Triangle: (√3 / 4) * Side^2',
        'Volume of Sphere: (4/3) * π * Radius^3',
        'Surface Area of Sphere: 4 * π * Radius^2',
        'Sum of Interior Angles of Polygon: (n - 2) * 180°, where n is the number of sides',
        'Midpoint Formula: ((x1 + x2) / 2, (y1 + y2) / 2)',
        'Distance Formula: √((x2 - x1)^2 + (y2 - y1)^2)',
        'Sum of n Terms of Arithmetic Progression (AP): (n/2) * (2a + (n-1)d)',
        'nth Term of Arithmetic Progression (AP): a + (n - 1) * d',
        'Sum of n Terms of Geometric Progression (GP): (a * (1 - r^n)) / (1 - r)',
        'nth Term of Geometric Progression (GP): a * r^(n - 1)',
        'Compound Interest: P * (1 + (r/n))^(nt) - P',
        'Simple Interest: (P * R * T) / 100',
        'Quadratic Equation: ax^2 + bx + c = 0, where a ≠ 0',
        'Area of Quadrilateral: 0.5 * d1 * d2 * Sin(θ), where d1 and d2 are diagonals, and θ is the angle between them',
        'Law of Sines: (a / Sin(A)) = (b / Sin(B)) = (c / Sin(C))',
        'Law of Cosines: a^2 = b^2 + c^2 - 2bc * Cos(A), and similarly for b and c',
        'Volume of Cone: (1/3) * π * Radius^2 * Height',
        'Surface Area of Cone: π * Radius * (Radius + √(Radius^2 + Height^2))',
        'Surface Area of Pyramid: Base Area + (0.5 * Perimeter * Slant Height)',
        'Volume of Pyramid: (1/3) * Base Area * Height',
        'Arithmetic Mean: Sum of observations / Number of observations',
          // Add more math formulas here
        ],
        scienceFormulas: [
        'Newton\'s Second Law: F = m * a',
        'Ohm\'s Law: V = I * R',
        'Speed: Distance / Time',
        'Acceleration: (Final Velocity - Initial Velocity) / Time',
        'Weight: Mass * Acceleration due to gravity',
        'Work: Force * Distance',
        'Power: Work / Time',
        'Pressure: Force / Area',
        'Density: Mass / Volume',
        'Refraction: n1 * Sin(θ1) = n2 * Sin(θ2)',
        'Snell\'s Law: n1 * Sin(θ1) = n2 * Sin(θ2)',
        'Boyle\'s Law: P1 * V1 = P2 * V2',
        'Charles\' Law: V1 / T1 = V2 / T2',
        'Avogadro\'s Law: V1 / n1 = V2 / n2',
        'Coulomb\'s Law: F = k * (q1 * q2) / r^2',
        'Einstein\'s Mass-Energy Equivalence: E = mc^2',
        'Bernoulli\'s Principle: P1 + (1/2 * ρ * v1^2) + (ρ * g * h1) = P2 + (1/2 * ρ * v2^2) + (ρ * g * h2)',
          // Add more science formulas here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  button {
    margin-right: 10px;
  }
  .formula{
    text-align: left;
  }
  .formula li{
    margin-top: 10px;
  }
  </style>

