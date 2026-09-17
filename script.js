/* =========================
   เช็กพืช
========================= */

function searchPlant() {

    const input =
        document
        .getElementById("plantInput")
        .value
        .trim()
        .toLowerCase();


    const result =
        document.getElementById("plantResult");


    if (!input) {

        result.innerHTML = `
            <div class="empty">
                🌱 กรุณาพิมพ์ชื่อพืช
            </div>
        `;

        return;
    }


    const plant =
        plants.find(p =>
            p.name.toLowerCase().includes(input) ||
            p.scientific.toLowerCase().includes(input)
        );


    if (!plant) {

        result.innerHTML = `
            <div class="empty">

                🔎 ไม่พบข้อมูลพืช

                <p>
                    ลองค้นด้วยชื่อภาษาไทย
                    หรือชื่อวิทยาศาสตร์
                </p>

            </div>
        `;

        return;
    }


    result.innerHTML = `

        <div class="result-card">

            <h3>
                ${plant.name}
            </h3>

            <div class="english-name">
                ${plant.scientific}
            </div>


            <div class="info-grid">

                <div class="info">
                    <small>ดินที่เหมาะสม</small>
                    <strong>
                        ${plant.soil.join(" / ")}
                    </strong>
                </div>


                <div class="info">
                    <small>pH</small>
                    <strong>
                        ${plant.ph}
                    </strong>
                </div>


                <div class="info">
                    <small>ความชื้น</small>
                    <strong>
                        ${plant.moisture}
                    </strong>
                </div>


                <div class="info">
                    <small>การระบายน้ำ</small>
                    <strong>
                        ${plant.drainage}
                    </strong>
                </div>


                <div class="info">
                    <small>แสงแดด</small>
                    <strong>
                        ${plant.light}
                    </strong>
                </div>


                <div class="info">
                    <small>อุณหภูมิ</small>
                    <strong>
                        ${plant.temperature}
                    </strong>
                </div>

            </div>


            <p>
                <b>ปริมาณน้ำฝน:</b>
                ${plant.rainfall}
            </p>


            <p>
                <b>สภาพพื้นที่:</b>
                ${plant.terrain}
            </p>

        </div>
    `;
}



/* กด Enter เพื่อค้นหาพืช */

document
    .getElementById("plantInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchPlant();

        }

    });



/* =========================
   วิเคราะห์ดิน
========================= */

function searchSoil() {

    const input =
        document
        .getElementById("soilInput")
        .value
        .trim()
        .toLowerCase();


    const list =
        document.getElementById("soilList");


    if (!input) {

        list.innerHTML = "";

        return;
    }


    const matches =
        soils.filter(soil =>

            soil.name
            .toLowerCase()
            .includes(input)

            ||

            soil.english
            .toLowerCase()
            .includes(input)

        );


    list.innerHTML =
        matches.map(soil => `

            <div
                class="search-result"
                onclick="showSoil('${soil.name}')"
            >

                <b>
                    ${soil.name}
                </b>

                <small>
                    — ${soil.english}
                </small>

            </div>

        `).join("");


    if (matches.length === 0) {

        list.innerHTML = `
            <div class="empty">
                ไม่พบชนิดดิน
            </div>
        `;

    }

}



function showSoil(name) {

    const soil =
        soils.find(s =>
            s.name === name
        );


    if (!soil) return;


    document.getElementById("soilInput").value =
        soil.name;


    document.getElementById("soilList").innerHTML =
        "";


    const suitablePlants =
        plants.map(plant => {

            let score = 55;


            if (
                plant.soil.includes(soil.name)
            ) {

                score += 30;

            }


            if (
                soil.drainage.includes("ดี")
            ) {

                score += 5;

            }


            return {

                ...plant,

                score: Math.min(score, 95)

            };

        })
        .sort(
            (a,b) => b.score - a.score
        );


    document.getElementById("soilResult").innerHTML = `

        <div class="result-card">

            <h3>
                ${soil.name}
            </h3>

            <div class="english-name">
                ${soil.english}
            </div>


            <div class="info-grid">

                <div class="info">
                    <small>ลักษณะเนื้อดิน</small>
                    <strong>${soil.texture}</strong>
                </div>

                <div class="info">
                    <small>การระบายน้ำ</small>
                    <strong>${soil.drainage}</strong>
                </div>

                <div class="info">
                    <small>การอุ้มน้ำ</small>
                    <strong>${soil.water}</strong>
                </div>

                <div class="info">
                    <small>อินทรียวัตถุ</small>
                    <strong>${soil.organic}</strong>
                </div>

                <div class="info">
                    <small>pH</small>
                    <strong>${soil.ph}</strong>
                </div>

            </div>


            <h3>
                🌱 พืชที่มีความเหมาะสม
            </h3>


            ${

                suitablePlants.map(plant => `

                    <div class="score-row">

                        <div>

                            <b>
                                ${plant.name}
                            </b>

                            <div class="bar">

                                <span
                                    style="
                                    width:${plant.score}%
                                    "
                                ></span>

                            </div>

                        </div>


                        <div class="score">
                            ${plant.score}%
                        </div>

                    </div>

                `).join("")

            }


        </div>

    `;

}



/* =========================
   จังหวัด
========================= */

function searchProvince() {

    const input =
        document
        .getElementById("provinceInput")
        .value
        .trim();


    const list =
        document
        .getElementById("provinceList");


    if (!input) {

        list.innerHTML = "";

        return;

    }


    const matches =
        provinces.filter(province =>
            province.includes(input)
        );


    list.innerHTML =
        matches.map(province => `

            <div
                class="search-result"
                onclick="selectProvince('${province}')"
            >

                ${province}

            </div>

        `).join("");


    if (!matches.length) {

        list.innerHTML = `
            <div class="empty">
                ไม่พบจังหวัด
            </div>
        `;

    }

}



function selectProvince(province) {

    document
        .getElementById("provinceInput")
        .value = province;


    document
        .getElementById("provinceList")
        .innerHTML = "";

}



/* =========================
   เตรียมชนิดดินในหน้า
   วิเคราะห์พื้นที่
========================= */

const areaSoil =
    document.getElementById("areaSoil");


soils.forEach(soil => {

    const option =
        document.createElement("option");


    option.value = soil.name;

    option.textContent =
        soil.name;


    areaSoil.appendChild(option);

});



/* =========================
   วิเคราะห์พื้นที่
========================= */

function analyzeArea() {

    const province =
        document
        .getElementById("provinceInput")
        .value
        .trim();


    const soilName =
        document
        .getElementById("areaSoil")
        .value;


    const result =
        document
        .getElementById("areaResult");


    if (!province || !soilName) {

        result.innerHTML = `

            <div class="empty">

                ⚠️
                กรุณาเลือกจังหวัดและชนิดดิน

            </div>

        `;

        return;

    }


    const soil =
        soils.find(s =>
            s.name === soilName
        );


    if (!soil) return;


    const ranked =
        plants.map(plant => {

            let score = 50;


            if (
                plant.soil.includes(
                    soil.name
                )
            ) {

                score += 35;

            }


            score += 5;


            return {

                ...plant,

                score:
                    Math.min(score, 95)

            };

        })
        .sort(
            (a,b) =>
                b.score - a.score
        );


    result.innerHTML = `

        <div class="result-card">

            <h3>
                ${province}
            </h3>

            <p>
                ชนิดดิน:
                <b>${soil.name}</b>
            </p>


            <h3>
                🌿 พืชที่ควรพิจารณา
            </h3>


            ${

                ranked.map(plant => `

                    <div class="score-row">

                        <div>

                            <b>
                                ${plant.name}
                            </b>

                            <div class="bar">

                                <span
                                    style="
                                    width:${plant.score}%
                                    "
                                ></span>

                            </div>

                        </div>


                        <div class="score">
                            ${plant.score}%
                        </div>

                    </div>

                `).join("")

            }


            <p>

                <small>

                    ผลลัพธ์นี้เป็น
                    <b>ต้นแบบการประเมิน</b>
                    โดยในระบบจริงควรนำข้อมูล
                    สภาพอากาศของจังหวัด
                    เช่น อุณหภูมิ ปริมาณฝน
                    และฤดูกาล มาคำนวณร่วมด้วย

                </small>

            </p>

        </div>

    `;

}
