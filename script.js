// ==========================================
// SoilMatch - script.js
// GBIF Plant Search + Soil + Area Prototype
// ==========================================

const GBIF_API = "https://api.gbif.org/v2/species/match";

// ==========================================
// 1. ค้นหาพืชจาก GBIF
// ==========================================

async function searchPlant() {
    const input = document.getElementById("plantInput");
    const result = document.getElementById("plantResult");

    const name = input.value.trim();

    if (!name) {
        result.innerHTML = `
            <div class="result-empty">
                กรุณาพิมพ์ชื่อพืชก่อนค้นหา
            </div>
        `;
        return;
    }

    result.innerHTML = `
        <div class="result-loading">
            🌱 กำลังค้นหาข้อมูลจาก GBIF...
        </div>
    `;

    try {
        const url =
            `${GBIF_API}?name=${encodeURIComponent(name)}&verbose=true`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("GBIF API error");
        }

        const data = await response.json();

        // ไม่พบข้อมูล
        if (!data.usage) {
            result.innerHTML = `
                <div class="result-empty">
                    ❌ ไม่พบข้อมูลพืช
                    <br>
                    <small>
                        ลองใช้ชื่อภาษาอังกฤษหรือชื่อวิทยาศาสตร์
                    </small>
                </div>
            `;
            return;
        }

        const plant = data.usage;

        const scientificName =
            plant.canonicalName ||
            plant.name ||
            "ไม่พบชื่อวิทยาศาสตร์";

        const rank =
            plant.rank ||
            "ไม่ระบุ";

        const status =
            plant.status ||
            "ไม่ระบุ";

        const kingdom =
            plant.kingdom ||
            "ไม่ระบุ";

        const family =
            plant.family ||
            "ไม่ระบุ";

        const genus =
            plant.genus ||
            "ไม่ระบุ";

        // ==========================================
        // แสดงผล
        // ==========================================

        result.innerHTML = `
            <div class="plant-result-card">

                <div class="plant-result-header">
                    <div>
                        <span class="result-label">
                            🌱 ผลการค้นหา
                        </span>

                        <h3>
                            ${escapeHTML(scientificName)}
                        </h3>

                        <p>
                            ชื่อที่ค้นหา:
                            <strong>${escapeHTML(name)}</strong>
                        </p>
                    </div>
                </div>

                <div class="result-grid">

                    <div class="result-item">
                        <span>ชื่อวิทยาศาสตร์</span>
                        <strong>
                            ${escapeHTML(scientificName)}
                        </strong>
                    </div>

                    <div class="result-item">
                        <span>สถานะ</span>
                        <strong>
                            ${escapeHTML(status)}
                        </strong>
                    </div>

                    <div class="result-item">
                        <span>ระดับอนุกรมวิธาน</span>
                        <strong>
                            ${escapeHTML(rank)}
                        </strong>
                    </div>

                    <div class="result-item">
                        <span>อาณาจักร</span>
                        <strong>
                            ${escapeHTML(kingdom)}
                        </strong>
                    </div>

                    <div class="result-item">
                        <span>วงศ์</span>
                        <strong>
                            ${escapeHTML(family)}
                        </strong>
                    </div>

                    <div class="result-item">
                        <span>สกุล</span>
                        <strong>
                            ${escapeHTML(genus)}
                        </strong>
                    </div>

                </div>

                <div class="gbif-source">
                    แหล่งข้อมูล:
                    <a
                        href="https://www.gbif.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GBIF
                    </a>
                </div>

            </div>
        `;

    } catch (error) {

        console.error("GBIF Error:", error);

        result.innerHTML = `
            <div class="result-empty">
                ⚠️ ไม่สามารถเชื่อมต่อฐานข้อมูล GBIF ได้
                <br>
                <small>
                    กรุณาลองใหม่อีกครั้ง
                </small>
            </div>
        `;
    }
}


// ==========================================
// 2. กด Enter เพื่อค้นหา
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const plantInput = document.getElementById("plantInput");

    if (plantInput) {
        plantInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                searchPlant();
            }

        });
    }

});


// ==========================================
// 3. ป้องกัน HTML injection
// ==========================================

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// 4. ระบบค้นหาดินเดิม
// ==========================================

function searchSoil() {

    const input =
        document.getElementById("soilInput");

    const list =
        document.getElementById("soilList");

    const keyword =
        input.value.trim().toLowerCase();

    if (!keyword) {
        list.innerHTML = "";
        return;
    }

    const matches = soils.filter(soil => {

        return (
            soil.name.toLowerCase().includes(keyword) ||
            soil.english.toLowerCase().includes(keyword)
        );

    });

    if (matches.length === 0) {

        list.innerHTML = `
            <div class="result-empty">
                ไม่พบชนิดดิน
            </div>
        `;

        return;
    }

    list.innerHTML = matches.map(soil => `

        <button
            class="soil-search-item"
            onclick="showSoil('${escapeJS(soil.name)}')"
        >
            <strong>${escapeHTML(soil.name)}</strong>
            <span>${escapeHTML(soil.english)}</span>
        </button>

    `).join("");
}


// ==========================================
// 5. แสดงข้อมูลดิน
// ==========================================

function showSoil(soilName) {

    const soil =
        soils.find(
            item => item.name === soilName
        );

    const result =
        document.getElementById("soilResult");

    if (!soil) return;

    result.innerHTML = `

        <div class="soil-result-card">

            <h3>
                🧪 ${escapeHTML(soil.name)}
            </h3>

            <p>
                ${escapeHTML(soil.english)}
            </p>

            <div class="result-grid">

                <div class="result-item">
                    <span>pH</span>
                    <strong>
                        ${soil.ph?.join(" – ") || "-"}
                    </strong>
                </div>

                <div class="result-item">
                    <span>การระบายน้ำ</span>
                    <strong>
                        ${escapeHTML(soil.drainage || "-")}
                    </strong>
                </div>

                <div class="result-item">
                    <span>การอุ้มน้ำ</span>
                    <strong>
                        ${escapeHTML(soil.waterHolding || "-")}
                    </strong>
                </div>

            </div>

        </div>
    `;
}


// ==========================================
// 6. จังหวัด
// ==========================================

function searchProvince() {

    const input =
        document.getElementById("provinceInput");

    const list =
        document.getElementById("provinceList");

    const keyword =
        input.value.trim().toLowerCase();

    if (!keyword) {
        list.innerHTML = "";
        return;
    }

    const matches =
        provinces.filter(province =>
            province.toLowerCase().includes(keyword)
        );

    list.innerHTML = matches.map(province => `

        <button
            class="province-search-item"
            onclick="selectProvince('${escapeJS(province)}')"
        >
            ${escapeHTML(province)}
        </button>

    `).join("");
}


// ==========================================
// 7. เลือกจังหวัด
// ==========================================

let selectedProvince = "";

function selectProvince(province) {

    selectedProvince = province;

    const input =
        document.getElementById("provinceInput");

    const list =
        document.getElementById("provinceList");

    input.value = province;

    list.innerHTML = `
        <div class="selected-province">
            ✓ เลือกจังหวัด:
            <strong>
                ${escapeHTML(province)}
            </strong>
        </div>
    `;
}


// ==========================================
// 8. เติมรายการดินในหน้า Area
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const select =
        document.getElementById("areaSoil");

    if (!select || typeof soils === "undefined") {
        return;
    }

    select.innerHTML = `
        <option value="">
            เลือกชนิดดิน
        </option>
    `;

    soils.forEach(soil => {

        const option =
            document.createElement("option");

        option.value = soil.name;
        option.textContent =
            `${soil.name} (${soil.english})`;

        select.appendChild(option);

    });

});


// ==========================================
// 9. วิเคราะห์พื้นที่
// ==========================================

function analyzeArea() {

    const soilName =
        document.getElementById("areaSoil").value;

    const result =
        document.getElementById("areaResult");

    if (!selectedProvince) {

        result.innerHTML = `
            <div class="result-empty">
                กรุณาเลือกจังหวัดก่อน
            </div>
        `;

        return;
    }

    if (!soilName) {

        result.innerHTML = `
            <div class="result-empty">
                กรุณาเลือกชนิดดินก่อน
            </div>
        `;

        return;
    }

    const soil =
        soils.find(
            item => item.name === soilName
        );

    if (!soil) return;

    // ------------------------------------------
    // ตอนนี้ยังใช้ข้อมูลพืชใน data.js
    // ขั้นต่อไปจะเปลี่ยนเป็นฐานข้อมูลจริง
    // ------------------------------------------

    const results = plants.map(plant => {

        let score = 0;

        // ตรวจชนิดดิน
        if (
            plant.soil &&
            plant.soil.some(
                s => s === soil.name
            )
        ) {
            score += 50;
        }

        // ตรวจ pH
        if (
            plant.ph &&
            soil.ph
        ) {

            const plantMin = plant.ph[0];
            const plantMax = plant.ph[1];

            const soilMin = soil.ph[0];
            const soilMax = soil.ph[1];

            if (
                plantMin <= soilMax &&
                plantMax >= soilMin
            ) {
                score += 30;
            }
        }

        score += 20;

        return {
            ...plant,
            score: Math.min(score, 100)
        };

    });

    results.sort(
        (a, b) => b.score - a.score
    );

    result.innerHTML = `

        <div class="area-result-card">

            <h3>
                🗺️ ผลการวิเคราะห์
            </h3>

            <p>
                จังหวัด:
                <strong>
                    ${escapeHTML(selectedProvince)}
                </strong>
            </p>

            <p>
                ดิน:
                <strong>
                    ${escapeHTML(soil.name)}
                </strong>
            </p>

            <div class="plant-ranking">

                ${results.map(plant => `

                    <div class="ranking-item">

                        <div class="ranking-header">

                            <strong>
                                ${escapeHTML(plant.name)}
                            </strong>

                            <span>
                                ${plant.score}%
                            </span>

                        </div>

                        <div class="score-bar">

                            <div
                                class="score-fill"
                                style="width:${plant.score}%"
                            ></div>

                        </div>

                    </div>

                `).join("")}

            </div>

            <small>
                * คะแนนนี้เป็นการประเมินจากข้อมูลที่มีในระบบ
                ไม่ใช่คำแนะนำทางการเกษตรโดยตรง
            </small>

        </div>
    `;
}


// ==========================================
// 10. ป้องกันปัญหาจากข้อความใน onclick
// ==========================================

function escapeJS(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}
