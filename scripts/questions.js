let questionData = [
    {
        question: `How many minutes do we get for the AP Calc BC MCQ Part 1 Section 1?`,
        answer: [
            `45 Minutes`,
            `60 Minutes`,
            `35 Minutes`,
            `65 Minutes`
        ],
        correctAnswer: 2
    },
    {
        question: `What are the requirements for the Mean Value Theorem?`,
        answer: [
            `Continuous`,
            `Differentiable`,
            `Continuous & Differentiable`,
            `None of the Above`
        ],
        correctAnswer: 3
    },
    {
        question: `Which of the following theorems have the condition f(x) must be continuous and differentiable?`,
        answer: [
            `EVT Only`,
            `MVT Only`,
            `IVT Only`,
            `EVT and MVT Only`
        ],
        correctAnswer: 2
    },
    {
        question: `If f(x) is decreasing, is a left Reimann Sum an overapproximation, an underapproximation, or an average?`,
        answer: [
            `Overapproximation`,
            `Underapproximation`,
            `Average`,
            `None of the above`
        ],
        correctAnswer: 1
    },
    {
        question: `What is the limit as x approaches 2 of (x-2) over (x²-3x+2)`,
        answer: [
            `0`,
            `1`,
            `-1`,
            `DNE`
        ],
        correctAnswer: 2
    },
    {
        question: `Evaluate the integral from 1 to ∞ of (1/x) dx`,
        answer: [
            `Infinity`,
            `0`,
            `-1`,
            `1`
        ],
        correctAnswer: 1
    },
    {
        question: `What is the Maclaurin series expansion for sin(x) the the third term?`,
        answer: [
            `1 + ⅟₆x³ - ⅟₁₂₀x⁵`,
            `1 + ⅟₂x² - ⅟₂₄x⁴`,
            `x + ⅟₆x³ - ⅟₁₂₀x⁵`,
            `x + ⅟₂x² - ⅟₂₄x⁴`
        ],
        correctAnswer: 3
    },
    {
        question: `Is the sum from n=0 to ∞ of (3neⁿ)/(n²+1) divergent or convergent?`,
        answer: [
            `Divergent by the nth term test`,
            `Convergent by the Ratio Test`,
            `Divergent by the Ratio Test`,
            `Convergent by the nth term test`
        ],
        correctAnswer: 1
    },
    {
        question: `To what value does the sum from n=0 to ∞ of 2(4/5)ⁿ converge to?`,
        answer: [
            `2/5`,
            `-2/5`,
            `10`,
            `-10`
        ],
        correctAnswer: 3
    },
    {
        question: `Which of the following is the graph of y=1/√(x)?`,
        answer: [
            `<img h-6em src="images/option1.PNG">`,
            `<img h-6em src="images/option2.PNG">`,
            `<img h-6em src="images/option3.PNG">`,
            `<img h-6em src="images/option4.PNG">`
        ],
        correctAnswer: 4
    },
    {
        question: `When does a polar cureve have an inner loop?`,
        answer: [
            `a > b`,
            `b > a`,
            `a = b`,
            `b >= a`
        ],
        correctAnswer: 2
    },
    {
        question: `If the limit as x approaches 4 of f(x) does not exist, which of the following is true?<br>
        I. f(x) is not differentiable at x=4<br>
        II. f(x) is not continuous at x=4<br>
        III. f'(a) has an asymptote at x=4
        `,
        answer: [
            `I only`,
            `II only`,
            `I and II only`,
            `I, II, and III`
        ],
        correctAnswer: 3
    },
    {
        question: `If the limit as x approaches a of f(x) equals f(a), which of the following is true?<br>
        I. the limit as x approaches a of f(x) exists
        II. f(x) is differentiable
        III. f'(a) is continuous
        `,
        answer: [
            `I only`,
            `II only`,
            `II and III only`,
            `I, II, and III`
        ],
        correctAnswer: 1
    },
    {
        question: `Find the integral of sin⁵(x)cos²(x) dx`,
        answer: [
            ` ⅟₃cos³x - ⅖cos⁵x - ⅐cos⁷x + C`,
            ` ⅟₃cos³x + ⅖cos⁵x - ⅐cos⁷x + C`,
            ` ⅟₃cos³x - ⅖cos⁵x + ⅐cos⁷x + C`,
            `-⅟₃cos³x + ⅖cos⁵x - ⅐cos⁷x + C`
        ],
        correctAnswer: 4
    },
    {
        question: `What is Mrs. Hanafi's favorite color?`,
        answer: [
            `Gold`,
            `Dark Red`,
            `Lime Green`,
            `Light Purple`
        ],
        correctAnswer: 4
    }
];