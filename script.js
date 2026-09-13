```javascript
console.log("Cooky Study Time - Grade 3 Website Loaded!");

alert("JavaScript ચાલુ છે!");

// ================================
// ENVIRONMENT WORKSHEET
// LESSON 1 - POONAME SHU JOYU?
// ================================


// સાચા જવાબો
const answers = {

    // MCQ
    q1: "B",
    q2: "C",
    q3: "A",
    q4: "D",
    q5: "C",
    q6: "D",
    q7: "D",
    q8: "D",
    q9: "C",
    q10: "B",
    q11: "D",
    q12: "C",
    q13: "A",
    q14: "A",

    // ખાલી જગ્યા
    q15: ["પક્ષી", "પક્ષીઓને"],
    q16: ["ઉંદર", "ઉંદરો"],
    q17: ["સસલું", "સસલો"],
    q18: ["વાંદરો", "વાંદરો"],
    q19: ["કાંગારું", "કાંગારુ"],
    q20: ["સૂંઢ", "સુંઢ"],
    q21: ["કરોળિયો", "કરોળિયા"],
    q22: ["ઉધઈનો રાફડો", "રાફડો", "રાફડો"],
    q23: ["ઊંટ", "ઉંટ"],
    q24: ["બગલો", "બગલો"],

    // સાચું / ખોટું
    q25: "true",
    q26: "false",
    q27: "false",
    q28: "true",
    q29: "true",
    q30: "false",
    q31: "false",
    q32: "false",
    q33: "true"
};


// ================================
// HOME PAGE
// ================================

function openEnvironment() {

    const worksheet = document.getElementById("environmentWorksheet");

    worksheet.style.display = "block";

    worksheet.scrollIntoView({
        behavior: "smooth"
    });
}


// ================================
// COMING SOON
// ================================

function comingSoon() {

    alert("આ વિષયની Worksheet ટૂંક સમયમાં ઉપલબ્ધ થશે. 😊");

}


// ================================
// CHECK WORKSHEET
// ================================

function checkWorksheet() {

    let score = 0;

    let attempted = 0;

    const total = 33;


    // ============================
    // MCQ + TRUE/FALSE
    // ============================

    for (let i = 1; i <= 14; i++) {

        const selected = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (selected) {

            attempted++;

            if (selected.value === answers["q" + i]) {

                score++;

            }

        }

    }


    // ============================
    // FILL IN THE BLANKS
    // ============================

    for (let i = 15; i <= 24; i++) {

        const input = document.querySelector(
            'input[name="q' + i + '"]'
        );

        if (input) {

            const userAnswer = input.value
                .trim()
                .toLowerCase();

            if (userAnswer !== "") {

                attempted++;

                const correctAnswers = answers["q" + i];

                let correct = false;

                for (let answer of correctAnswers) {

                    if (
                        userAnswer === answer
                        .trim()
                        .toLowerCase()
                    ) {

                        correct = true;
                        break;

                    }

                }

                if (correct) {

                    score++;

                }

            }

        }

    }


    // ============================
    // TRUE / FALSE
    // ============================

    for (let i = 25; i <= 33; i++) {

        const selected = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (selected) {

            attempted++;

            if (selected.value === answers["q" + i]) {

                score++;

            }

        }

    }


    // ============================
    // RESULT
    // ============================

    const percentage = Math.round(
        (score / total) * 100
    );


    let message = "";

    if (percentage >= 80) {

        message = "🌟 ખૂબ સરસ! તમારો અભ્યાસ ખૂબ સારો છે.";

    } else if (percentage >= 50) {

        message = "👏 સરસ પ્રયત્ન! થોડો વધુ અભ્યાસ કરો.";

    } else {

        message = "💪 ફરી પ્રયત્ન કરો. તમે ચોક્કસ સારું કરી શકશો.";

    }


    const result = document.getElementById("result");


    result.innerHTML = `

        <div class="result-box">

            <h2>🎉 Worksheet પૂર્ણ!</h2>

            <p class="score">
                તમારો સ્કોર:
                <strong>${score} / ${total}</strong>
            </p>

            <p>
                Percentage:
                <strong>${percentage}%</strong>
            </p>

            <p>
                તમે ${attempted} પ્રશ્નોના જવાબ આપ્યા.
            </p>

            <h3>${message}</h3>

            <button onclick="location.reload()">
                🔄 ફરીથી પ્રયાસ કરો
            </button>

        </div>

    `;


    result.scrollIntoView({
        behavior: "smooth"
    });

}
```
