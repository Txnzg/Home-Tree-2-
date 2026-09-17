const plants = [

    {
        name: "สัก",
        scientific: "Tectona grandis",

        soil: [
            "ดินร่วน",
            "ดินร่วนปนทราย"
        ],

        ph: "ประมาณ 6.0–7.5",
        moisture: "ปานกลาง",
        drainage: "ดี",
        light: "แดดจัด",
        temperature: "ประมาณ 20–35°C",
        rainfall: "ประมาณ 1,000–2,000 มม./ปี",
        terrain: "พื้นที่ระบายน้ำดี"
    },


    {
        name: "มะม่วง",
        scientific: "Mangifera indica",

        soil: [
            "ดินร่วน",
            "ดินร่วนปนทราย"
        ],

        ph: "ประมาณ 5.5–7.5",
        moisture: "ปานกลาง",
        drainage: "ดี",
        light: "แดดจัด",
        temperature: "ประมาณ 24–30°C",
        rainfall: "ต้องมีช่วงแล้งที่เหมาะสม",
        terrain: "พื้นที่ไม่แฉะ"
    },


    {
        name: "ยางนา",
        scientific: "Dipterocarpus alatus",

        soil: [
            "ดินร่วน",
            "ดินร่วนเหนียว"
        ],

        ph: "ประมาณ 5.5–7.0",
        moisture: "ปานกลาง–สูง",
        drainage: "ปานกลาง–ดี",
        light: "แดดจัดถึงรำไร",
        temperature: "เขตร้อน",
        rainfall: "ต้องการน้ำค่อนข้างมาก",
        terrain: "พื้นที่ชื้นที่ระบายน้ำได้"
    },


    {
        name: "ประดู่",
        scientific: "Pterocarpus macrocarpus",

        soil: [
            "ดินร่วน",
            "ดินร่วนปนทราย"
        ],

        ph: "ประมาณ 6.0–7.5",
        moisture: "ปานกลาง",
        drainage: "ดี",
        light: "แดดจัด",
        temperature: "เขตร้อน",
        rainfall: "ปานกลาง",
        terrain: "พื้นที่ระบายน้ำดี"
    },


    {
        name: "อินทนิลน้ำ",
        scientific: "Lagerstroemia speciosa",

        soil: [
            "ดินร่วน",
            "ดินร่วนเหนียว"
        ],

        ph: "ประมาณ 5.5–7.0",
        moisture: "ปานกลาง–สูง",
        drainage: "ปานกลาง",
        light: "แดดจัด",
        temperature: "เขตร้อนชื้น",
        rainfall: "ปานกลาง–สูง",
        terrain: "พื้นที่ชื้นแต่ไม่ท่วมขัง"
    }

];



const soils = [

    {
        name: "ดินร่วน",
        english: "Loamy Soil",
        texture: "เนื้อดินสมดุล",
        drainage: "ดี",
        water: "ปานกลาง",
        organic: "ปานกลาง",
        ph: "ประมาณ 5.5–7.5"
    },


    {
        name: "ดินทราย",
        english: "Sandy Soil",
        texture: "เนื้อดินค่อนข้างหยาบ",
        drainage: "เร็ว",
        water: "ต่ำ",
        organic: "มักต่ำ",
        ph: "ขึ้นอยู่กับพื้นที่"
    },


    {
        name: "ดินเหนียว",
        english: "Clay Soil",
        texture: "เนื้อดินละเอียด",
        drainage: "ช้า",
        water: "สูง",
        organic: "แปรผัน",
        ph: "ขึ้นอยู่กับพื้นที่"
    },


    {
        name: "ดินร่วนปนทราย",
        english: "Sandy Loam",
        texture: "ค่อนข้างหยาบ",
        drainage: "ดี",
        water: "ปานกลาง",
        organic: "ปานกลาง",
        ph: "ประมาณ 5.5–7.5"
    },


    {
        name: "ดินร่วนเหนียว",
        english: "Clay Loam",
        texture: "ค่อนข้างละเอียด",
        drainage: "ปานกลาง",
        water: "ปานกลาง–สูง",
        organic: "ปานกลาง",
        ph: "ประมาณ 5.5–7.5"
    },


    {
        name: "Arenosol",
        english: "WRB Reference Soil Group",
        texture: "มักเป็นดินเนื้อหยาบ",
        drainage: "ดีถึงเร็ว",
        water: "ต่ำ–ปานกลาง",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Acrisol",
        english: "WRB Reference Soil Group",
        texture: "มีการสะสมดินเหนียว",
        drainage: "แปรผัน",
        water: "แปรผัน",
        organic: "แปรผัน",
        ph: "มักเป็นกรด"
    },


    {
        name: "Ferralsol",
        english: "WRB Reference Soil Group",
        texture: "มีการผุพังสูง",
        drainage: "โดยทั่วไปดี",
        water: "แปรผัน",
        organic: "แปรผัน",
        ph: "มักเป็นกรด"
    },


    {
        name: "Luvisol",
        english: "WRB Reference Soil Group",
        texture: "มีการสะสมดินเหนียว",
        drainage: "แปรผัน",
        water: "ปานกลาง",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Cambisol",
        english: "WRB Reference Soil Group",
        texture: "ดินที่มีพัฒนาการระดับหนึ่ง",
        drainage: "แปรผัน",
        water: "แปรผัน",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Fluvisol",
        english: "WRB Reference Soil Group",
        texture: "ดินตะกอนน้ำพา",
        drainage: "แปรผัน",
        water: "แปรผัน",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Vertisol",
        english: "WRB Reference Soil Group",
        texture: "ดินเหนียวจัด",
        drainage: "มักช้า",
        water: "สูง",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Gleysol",
        english: "WRB Reference Soil Group",
        texture: "มีสภาพอิ่มน้ำเป็นช่วง",
        drainage: "ช้า",
        water: "สูง",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Regosol",
        english: "WRB Reference Soil Group",
        texture: "ดินที่มีพัฒนาการน้อย",
        drainage: "แปรผัน",
        water: "แปรผัน",
        organic: "แปรผัน",
        ph: "แปรผัน"
    },


    {
        name: "Histosol",
        english: "WRB Reference Soil Group",
        texture: "มีอินทรียวัตถุสูง",
        drainage: "แปรผัน",
        water: "สูง",
        organic: "สูง",
        ph: "แปรผัน"
    }

];



const provinces = [

    "กรุงเทพมหานคร",
    "กระบี่",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พะเยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "ยะลา",
    "ยโสธร",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "สุโขทัย",
    "หนองคาย",
    "หนองบัวลำภู",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "อุบลราชธานี",
    "อ่างทอง",
    "เชียงราย",
    "เชียงใหม่",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "เลย",
    "แพร่",
    "แม่ฮ่องสอน"
];
