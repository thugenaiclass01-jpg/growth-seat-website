import { Product } from "./types";

// Import all images
import imgGreenArmchair from "@assets/IMG_1501_1765956915525.jpeg";
import imgBeigeArmchair from "@assets/IMG_1502_1765956915525.jpeg";
import imgOfficeLeather from "@assets/IMG_1503_1765956915525.jpeg";
import imgWhiteDining from "@assets/IMG_1504_1765956915525.jpeg";
import imgOfficeMesh from "@assets/IMG_1505_1765956915525.jpeg";
import imgYellowDining from "@assets/IMG_1506_1765956915525.jpeg";
import imgWoodSlatted from "@assets/IMG_1507_1765956915525.jpeg";
import imgWoodHole from "@assets/IMG_1508_1765956915525.jpeg";
import imgRedHole from "@assets/IMG_1509_1765956915525.jpeg";
import imgGreenUph from "@assets/IMG_1510_1765956915525.jpeg";
import imgDarkWoodUph from "@assets/IMG_1511_1765956915525.jpeg";
import imgBrownLeatherUph from "@assets/IMG_1512_1765956915525.jpeg";
import imgBeigeRope from "@assets/IMG_1513_1765956915525.jpeg";
import imgWhiteMetal from "@assets/IMG_1514_1765956915525.jpeg";
import imgGreyRope from "@assets/IMG_1515_1765956915525.jpeg";
import imgWhiteSlattedMetal from "@assets/IMG_1516_1765956915525.jpeg";

// Modern/Artistic Series
import imgModernSquareWood from "@assets/IMG_1517_1765956942897.jpeg";
import imgModernPlywood from "@assets/IMG_1518_1765956942897.jpeg";
import imgModernBlackSquare from "@assets/IMG_1519_1765956942897.jpeg";
import imgModernPlywoodLight from "@assets/IMG_1520_1765956942897.jpeg";
import imgModernBlackMesh from "@assets/IMG_1521_1765956942897.jpeg";
import imgModernWhiteCurve from "@assets/IMG_1522_1765956942897.jpeg";
import imgModernWhiteSculpt from "@assets/IMG_1523_1765956942897.jpeg";
import imgModernBlackLoop from "@assets/IMG_1524_1765956942897.jpeg";
import imgModernWoodLoop from "@assets/IMG_1525_1765956942897.jpeg";
import imgModernDarkWoodLoop from "@assets/IMG_1526_1765956942897.jpeg";
import imgModernLightWoodLoop from "@assets/IMG_1527_1765956942897.jpeg";
import imgModernPlywoodSwivel from "@assets/IMG_1528_1765956942897.jpeg";
import imgModernWhiteSwivel from "@assets/IMG_1529_1765956942897.jpeg";
import imgModernBlackSwivel from "@assets/IMG_1530_1765956942897.jpeg";
import imgModernWoodSwivel from "@assets/IMG_1531_1765956942897.jpeg";


export const products: Product[] = [
  // --- Living Room ---
  {
    id: 1,
    name: "綠意舒適扶手椅 - The Green",
    price: 3200,
    category: "客廳系列",
    description: "經典的綠色布面扶手椅，為您的客廳增添一抹自然的寧靜。厚實的坐墊提供極致的舒適感，適合閱讀或午後小憩。",
    image: imgGreenArmchair,
    images: [imgGreenArmchair, imgBeigeArmchair],
    colors: ["森林綠", "米杏色"],
    features: ["高密度泡棉", "實木椅腳", "可拆洗椅套"],
    dimensions: "W75 x D80 x H95 cm",
    material: "亞麻布、橡木",
    tag: "新品",
  },
  {
    id: 2,
    name: "經典米色單人沙發 - The Cozy",
    price: 3500,
    category: "客廳系列",
    description: "溫暖的米色調，搭配簡約的線條設計。這款單人沙發是現代居家風格的百搭單品，讓家更顯溫馨。",
    image: imgBeigeArmchair,
    images: [imgBeigeArmchair, imgGreenArmchair],
    colors: ["米杏色", "深灰色"],
    features: ["人體工學靠背", "防潑水布料", "加寬坐面"],
    dimensions: "W78 x D82 x H90 cm",
    material: "科技布、櫸木",
    tag: "熱銷",
  },

  // --- Office ---
  {
    id: 3,
    name: "主管級皮革辦公椅 - Executive",
    price: 4500,
    category: "辦公系列",
    description: "採用優質合成皮革，觸感柔軟細膩。加厚頭枕與腰靠設計，支撐您一整天的工作需求，展現專業氣度。",
    image: imgOfficeLeather,
    images: [imgOfficeLeather, imgOfficeMesh],
    colors: ["經典棕", "曜石黑"],
    features: ["可傾仰椅背", "氣壓升降", "靜音滾輪"],
    dimensions: "W65 x D65 x H110-120 cm",
    material: "PU皮革、尼龍腳",
    tag: "商務首選",
  },
  {
    id: 4,
    name: "透氣網布人體工學椅 - Air Flow",
    price: 2800,
    category: "辦公系列",
    description: "全網布設計，通風透氣不悶熱。簡約俐落的造型，適合現代辦公室或居家書房使用。",
    image: imgOfficeMesh,
    images: [imgOfficeMesh, imgOfficeLeather],
    colors: ["極致黑", "太空灰"],
    features: ["高彈力網布", "可調式扶手", "腰部支撐"],
    dimensions: "W60 x D60 x H95-105 cm",
    material: "透氣網布、塑鋼",
  },

  // --- Dining / Cafe ---
  {
    id: 5,
    name: "北歐風簡約餐椅 - Nordic White",
    price: 950,
    category: "餐廳系列",
    description: "經典的北歐風格，白色椅面搭配淺色木腳，清新自然。適合搭配各種風格的餐桌。",
    image: imgWhiteDining,
    images: [imgWhiteDining, imgYellowDining],
    colors: ["純淨白", "芥末黃", "霧面白"],
    features: ["易清潔椅面", "穩固結構", "防滑腳墊"],
    dimensions: "W45 x D50 x H82 cm",
    material: "PP塑料、櫸木",
    tag: "高CP值",
  },
  {
    id: 6,
    name: "溫暖黃餐椅 - Nordic Yellow",
    price: 950,
    category: "餐廳系列",
    description: "為餐廳注入活力的亮黃色。人體工學弧形椅背，提供良好的背部支撐。",
    image: imgYellowDining,
    images: [imgYellowDining, imgWhiteDining],
    colors: ["芥末黃", "純淨白"],
    features: ["一體成型椅面", "輕量化設計", "可堆疊"],
    dimensions: "W46 x D52 x H80 cm",
    material: "PP塑料、黑鐵腳",
  },
  {
    id: 7,
    name: "實木格柵餐椅 - The Slat",
    price: 1800,
    category: "餐廳系列",
    description: "傳統格柵椅背設計的現代詮釋。全實木製作，質感溫潤，堅固耐用。",
    image: imgWoodSlatted,
    images: [imgWoodSlatted, imgWoodHole],
    colors: ["原木色", "胡桃色"],
    features: ["FSC認證木材", "舒適軟墊", "傳統榫接工藝"],
    dimensions: "W44 x D50 x H85 cm",
    material: "橡膠木、亞麻布",
  },
  {
    id: 8,
    name: "曲木造型椅 - The Circle",
    price: 2100,
    category: "餐廳系列",
    description: "獨特的圓孔椅背設計，展現曲木工藝之美。不僅是椅子，更是空間中的藝術品。",
    image: imgWoodHole,
    images: [imgWoodHole, imgRedHole, imgGreenUph],
    colors: ["淺木色", "深木色"],
    features: ["曲木工藝", "輕巧堅固", "易於搬運"],
    dimensions: "W48 x D52 x H78 cm",
    material: "彎曲膠合板、黑鐵腳",
  },
  {
    id: 9,
    name: "復古紅造型椅 - Retro Red",
    price: 1200,
    category: "商業空間",
    description: "搶眼的紅色，適合商業空間或想要打造焦點的居家角落。耐用易保養。",
    image: imgRedHole,
    images: [imgRedHole, imgWoodHole],
    colors: ["復古紅", "經典白"],
    features: ["抗汙處理", "強化結構", "色彩飽和"],
    dimensions: "W48 x D52 x H78 cm",
    material: "強化塑料",
  },
  {
    id: 10,
    name: "精緻布面餐椅 - Green Fabric",
    price: 1600,
    category: "餐廳系列",
    description: "結合了曲木造型與舒適布面。綠色織紋布料帶來沉穩的氣質。",
    image: imgGreenUph,
    images: [imgGreenUph, imgDarkWoodUph],
    colors: ["墨綠", "深灰"],
    features: ["透氣布料", "舒適坐感", "防刮腳墊"],
    dimensions: "W50 x D55 x H80 cm",
    material: "織布、實木腳",
  },

  // --- Outdoor ---
  {
    id: 11,
    name: "戶外編織休閒椅 - Rattan Beige",
    price: 2500,
    category: "戶外系列",
    description: "手工編織的戶外椅，抗UV材質，不怕日曬雨淋。附贈舒適抱枕，是庭院放鬆的最佳夥伴。",
    image: imgBeigeRope,
    images: [imgBeigeRope, imgGreyRope],
    colors: ["自然米", "石墨灰"],
    features: ["全天候材質", "快乾泡棉", "穩固鐵架"],
    dimensions: "W65 x D70 x H75 cm",
    material: "PE藤、粉體塗裝鋼管",
    tag: "戶外精選",
  },
  {
    id: 12,
    name: "極簡白戶外椅 - White Line",
    price: 1500,
    category: "戶外系列",
    description: "極簡線條設計，輕盈且現代。特殊的防鏽塗層，適合台灣潮濕的氣候。",
    image: imgWhiteMetal,
    images: [imgWhiteMetal, imgWhiteSlattedMetal],
    colors: ["消光白", "消光黑"],
    features: ["防鏽處理", "可堆疊", "易清潔"],
    dimensions: "W55 x D60 x H80 cm",
    material: "鋁合金",
  },
  {
    id: 13,
    name: "現代編織椅 - Grey Rope",
    price: 2800,
    category: "戶外系列",
    description: "寬大的座面設計，使用加粗編織繩，支撐性更佳。木質扶手增添溫潤觸感。",
    image: imgGreyRope,
    images: [imgGreyRope, imgBeigeRope],
    colors: ["石墨灰", "自然米"],
    features: ["加寬座面", "柚木扶手", "防潑水"],
    dimensions: "W70 x D75 x H72 cm",
    material: "戶外繩、柚木、鋁合金",
  },

  // --- Design / Modern ---
  {
    id: 14,
    name: "未來感曲線椅 - The Wave",
    price: 5600,
    category: "設計師系列",
    description: "一體成型的流線設計，挑戰工藝極限。不僅是椅子，更是空間中的雕塑。",
    image: imgModernWhiteCurve,
    images: [imgModernWhiteCurve, imgModernWhiteSculpt],
    colors: ["極地白"],
    features: ["一體成型", "前衛設計", "收藏價值"],
    dimensions: "W60 x D70 x H75 cm",
    material: "玻璃纖維強化塑料",
    tag: "限量",
  },
  {
    id: 15,
    name: "無限迴圈椅 - Infinity Wood",
    price: 6200,
    category: "設計師系列",
    description: "獨特的迴圈造型，展現木材的韌性與美感。每一個角度都充滿驚喜。",
    image: imgModernWoodLoop,
    images: [imgModernWoodLoop, imgModernDarkWoodLoop, imgModernLightWoodLoop],
    colors: ["胡桃木", "黑檀木", "白橡木"],
    features: ["層壓曲木", "人體工學弧線", "獨特造型"],
    dimensions: "W58 x D65 x H82 cm",
    material: "多層板熱壓成型",
  },
   {
    id: 16,
    name: "幾何方塊椅 - Cube Wood",
    price: 4800,
    category: "設計師系列",
    description: "以幾何方塊為靈感，中空的設計減輕了視覺重量，卻不失穩重。",
    image: imgModernSquareWood,
    images: [imgModernSquareWood, imgModernBlackSquare],
    colors: ["原木色", "消光黑"],
    features: ["極簡幾何", "多功能用途", "穩固底座"],
    dimensions: "W45 x D45 x H45 cm",
    material: "實木貼皮",
  },
   {
    id: 17,
    name: "旋轉曲線椅 - Swivel Curve",
    price: 5200,
    category: "設計師系列",
    description: "結合了曲線美學與旋轉機能。金屬底座提供穩定的支撐，椅身線條優雅流暢。",
    image: imgModernPlywoodSwivel,
    images: [imgModernPlywoodSwivel, imgModernWhiteSwivel, imgModernBlackSwivel],
    colors: ["胡桃木", "烤漆白", "碳纖黑"],
    features: ["360度旋轉", "不鏽鋼底座", "流線造型"],
    dimensions: "W62 x D60 x H78 cm",
    material: "曲木、不鏽鋼",
  },
];
