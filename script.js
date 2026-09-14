```javascript
console.log("Cooky Study Time - Grade 3 Website Loaded!");


// =====================================================
// ENVIRONMENT WORKSHEET
// LESSON 1 - POONAME SHU JOYU?
// =====================================================


// ================================
// સાચા જવાબો
// ================================

const answers = {

    // ----------------------------
    // MCQ - Q1 to Q14
    // ----------------------------

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


    // ----------------------------
    // ખાલી જગ્યા - Q15 to Q24
    // ----------------------------

    q15: ["પક્ષી", "પક્ષીઓને"],

    q16: ["ઉંદર", "ઉંદરો"],

    q17: ["સસલું", "સસલો"],

    q18: ["વાંદરો"],

    q19: ["કાંગારું", "કાંગારુ"],

    q20: ["સૂંઢ", "સુંઢ"],

    q21: ["કરોળિયો", "કરોળિયા"],

    q22: ["ઉધઈનો રાફડો", "રાફડો"],

    q23: ["ઊંટ", "ઉંટ"],

    q24: ["બગલો"],


    // ----------------------------
    // સાચું / ખોટું - Q25 to Q33
    // ----------------------------

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


// =====================================================
// HOME PAGE
// =====================================================

function openEnvironment() {

    const worksheet =
        document.getElementById("environmentWorksheet");

    if (!worksheet) {

        alert("Worksheet section મળ્યો નથી.");

        return;
    }

    worksheet.style.display = "block";

    worksheet.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// COMING SOON
// =====================================================

function comingSoon() {

    alert(
        "આ વિષયની Worksheet ટૂંક સમયમાં ઉપલબ્ધ થશે. 😊"
    );

}


// =====================================================
// ANSWER CLEANING
// =====================================================

function cleanAnswer(value) {

    if (value === null || value === undefined) {

        return "";

    }

    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


// =====================================================
// CHECK ONE ANSWER
// =====================================================

function isCorrectAnswer(questionName, userAnswer) {

    const correctAnswers = answers[questionName];

    if (correctAnswers === undefined) {

        return false;

    }


    const user =
        cleanAnswer(userAnswer);


    // જો જવાબ જ ન આપ્યો હોય
    if (user === "") {

        return false;

    }


    // જો ઘણા સાચા જવાબ હોય
    if (Array.isArray(correctAnswers)) {

        return correctAnswers.some(function(answer) {

            return cleanAnswer(answer) === user;

        });

    }


    // જો એક જ સાચો જવાબ હોય
    return cleanAnswer(correctAnswers) === user;

}


// =====================================================
// GET RADIO ANSWER
// =====================================================

function getRadioAnswer(questionName) {

    const selected =
        document.querySelector(
            'input[name="' + questionName + '"]:checked'
        );

    if (!selected) {

        return "";

    }

    return selected.value;

}


// =====================================================
// GET TEXT ANSWER
// =====================================================

function getTextAnswer(questionName) {

    const input =
        document.querySelector(
            'input[name="' + questionName + '"]'
        );

    if (!input) {

        return "";

    }

    return input.value;

}


// =====================================================
// CHECK WORKSHEET
// =====================================================

function checkWorksheet() {

    try {

        let score = 0;

        let attempted = 0;

        const total = 33;


        // =================================================
        // Q1 to Q14 - MCQ
        // =================================================

        for (let i = 1; i <= 14; i++) {

            const questionName = "q" + i;

            const userAnswer =
                getRadioAnswer(questionName);


            if (userAnswer !== "") {

                attempted++;

                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }


        // =================================================
        // Q15 to Q24 - FILL IN THE BLANKS
        // =================================================

        for (let i = 15; i <= 24; i++) {

            const questionName = "q" + i;

            const userAnswer =
                getTextAnswer(questionName);


            if (cleanAnswer(userAnswer) !== "") {

                attempted++;

                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }


        // =================================================
        // Q25 to Q33 - TRUE / FALSE
        // =================================================

        for (let i = 25; i <= 33; i++) {

            const questionName = "q" + i;

            const userAnswer =
                getRadioAnswer(questionName);


            if (userAnswer !== "") {

                attempted++;

                if (
                    isCorrectAnswer(
                        questionName,
                        userAnswer
                    )
                ) {

                    score++;

                }

            }

        }


        // =================================================
        // PERCENTAGE
        // =================================================

        const percentage =
            Math.round(
                (score / total) * 100
            );


        // =================================================
        // MESSAGE
        // =================================================

        let message = "";


        if (percentage >= 80) {

            message =
                "🌟 ખૂબ સરસ! તમારો અભ્યાસ ખૂબ સારો છે.";

        }

        else if (percentage >= 50) {

            message =
                "👏 સરસ પ્રયત્ન! થોડો વધુ અભ્યાસ કરો.";

        }

        else {

            message =
                "💪 ફરી પ્રયત્ન કરો. તમે ચોક્કસ સારું કરી શકશો.";

        }


        // =================================================
        // RESULT BOX
        // =================================================

        const result =
            document.getElementById("result");


        if (!result) {

            alert(
                "Result box મળ્યો નથી. HTML માં id=\"result\" તપાસો."
            );

            return;

        }


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
                    તમે
                    <strong>${attempted}</strong>
                    પ્રશ્નોના જવાબ આપ્યા.
                </p>

                <h3>
                    ${message}
                </h3>

                <button
                    type="button"
                    onclick="location.reload()"
                >
                    🔄 ફરીથી પ્રયાસ કરો
                </button>

            </div>

        `;


        // =================================================
        // RESULT સુધી SCROLL
        // =================================================

        result.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });


    }

    catch (error) {

        console.error(
            "Worksheet Error:",
            error
        );


        alert(
            "Worksheet Submit કરતી વખતે સમસ્યા આવી છે. કૃપા કરીને ફરી પ્રયાસ કરો."
        );

    }

}
```
