import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logo from '../imports/NewMenuLook.jpeg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E8DCC4] py-12 px-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header with Logo */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <h1 className="text-[180px] font-bold text-[#D4C4A8] tracking-wider">MENU</h1>
          </div>
          <div className="relative flex justify-center py-8">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-4 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D4A574] rounded-full w-48 h-48 top-8 left-8"></div>
                  <div className="relative text-6xl">🧑‍🍳</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-script text-[#2C5530] mb-1">the</div>
                <div className="text-4xl font-bold text-[#2C5530]">CREAMY GARDEN</div>
                <div className="text-sm font-semibold tracking-widest text-[#2C5530]">FOOD TRUCK</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-[#D4A574] rounded-[40px] p-12 mb-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {/* Tier 1 */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-[#2C5530] mb-6">מיקסר פוטטו</h3>
              <div className="text-[#2C5530] space-y-2 mb-8">
                <p>תפוח אדמה מקורם</p>
                <p>עם מגוון תוספות</p>
                <p>מפנקות לבחירה</p>
              </div>
              <div className="text-3xl font-bold text-[#2C5530]">₪35</div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/30"></div>
            </div>

            {/* Tier 2 */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-[#2C5530] mb-6">פסטה הנד מייד</h3>
              <div className="text-[#2C5530] space-y-2 mb-8">
                <p>פסטה פטן צ׳יני</p>
                <p>רביולי בטטה</p>
                <p>רביולי גבינה</p>
                <p>רביולי פטריות כמהין</p>
              </div>
              <div className="text-3xl font-bold text-[#2C5530]">₪45</div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/30"></div>
            </div>

            {/* Tier 3 */}
            <div>
              <h3 className="text-2xl font-bold text-[#2C5530] mb-6">פיצה בטאבון</h3>
              <div className="text-[#2C5530] space-y-2 mb-8">
                <p>מרגריטה קלאסית</p>
                <p>שמנת פטריות</p>
                <p>בוראטה עם בלסמי ותרוקט</p>
              </div>
              <div className="text-3xl font-bold text-[#2C5530]">₪45|55|65</div>
            </div>
          </div>
        </div>

        {/* Toppings Section */}
        <div className="bg-[#2C5530] rounded-[40px] p-12 mb-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">תוספות</h2>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              שמנת
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              תירס
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              זיתים שחורים
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              פסטו
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              פטריות
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              זיתים ירוקים
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              בצל ירוק
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              חריף
            </button>
            <button className="bg-[#4A6B4D] hover:bg-[#5A7B5D] text-white py-4 px-6 rounded-2xl font-semibold transition-colors">
              ג׳נג ג׳י
            </button>
          </div>
        </div>

        {/* Bottom Two Sections */}
        <div className="grid grid-cols-2 gap-8">
          {/* Sauce Selection */}
          <div className="bg-[#D4A574] rounded-[40px] p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2C5530]">משהו מתוק לקינוח</h3>
              <span className="text-xl font-bold text-[#2C5530]">₪15</span>
            </div>

            <div className="text-[#2C5530] text-center mb-6">
              <p>צ׳ורוס ספרדי</p>
              <p>מחלב חם</p>
            </div>

            <div className="w-full h-px bg-white/30 mb-6"></div>

            <div className="grid grid-cols-3 gap-3">
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                מים 8₪
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                שתייה קלה 10₪
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                טרופיקנה 8₪
              </button>
            </div>
          </div>

          {/* Personal Toppings */}
          <div className="bg-[#D4A574] rounded-[40px] p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2C5530]">סלט בהרכבה אישית</h3>
              <span className="text-xl font-bold text-[#2C5530]">₪35</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                מלפפון
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                עגבניה
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                תירס
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                גמבה
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                חסה
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                פטריות
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                זיתים ירוקים
              </button>
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                זיתים שחורים
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button className="bg-[#C9985D] hover:bg-[#B88850] text-[#2C5530] py-3 px-4 rounded-xl font-semibold transition-colors">
                בולגרית (בחופסת 10 ע״ח)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}