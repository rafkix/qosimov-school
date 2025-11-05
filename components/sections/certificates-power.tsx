import { Award, GraduationCap } from "lucide-react";

export default function CertificatesPower() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="pt-10">
          <h2 className="text-emerald-600 text-4xl font-bold mb-2 text-center xl:text-5xl">
            Milliy sertifikatlarimiz kuchi
          </h2>
          <p className="text-emerald-600 text-base opacity-50 mb-10 text-center md:text-lg xl:text-xl max-w-2xl mx-auto">
            Kelajagingizni yoritish uchun – bizning milliy sertifikatlarimiz fanlarda yutuqlaringizni tasdiqlaydi va
            universitetga kirishingizni osonlashtiradi!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Certificate Card */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="col-span-2 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <p className="text-slate-600 text-base xl:text-lg">
                Milliy sertifikatlarimiz biologiya, kimyo, ona tili va adabiyot kabi fanlarda yutuqlaringizni tasdiqlaydi.
                Bu sertifikatlar sizning bilim va malakangizni namoyish etadi va kelajakdagi imkoniyatlaringizni kengaytiradi.
              </p>
            </div>

            {/* Subject Logos */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <img src="/bio-svgrepo-com.svg" alt="Biologiya" className="w-20 h-20" />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <img src="/chem-svgrepo-com.svg" alt="Kimyo" className="w-20 h-20" />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <img src="/uzt-svgrepo-com.svg" alt="Ona tili" className="w-20 h-20" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">20+</p>
                <p className="text-emerald-600/50 text-base font-bold">maktablar bizga ishonishadi</p>
              </div>
            </div>
          </div>

          {/* Certificate Banner */}
          <div className="h-full overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src="/certificates.png?height=400&width=300"
              alt="Milliy Sertifikatlar"
            />
          </div>

          {/* University Recognition */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="col-span-2 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <p className="text-slate-600 text-base xl:text-lg">
                Milliy sertifikatlarimiz O‘zbekistonning eng nufuzli universitetlari tomonidan tan olingan.  
  Siz IELTS yoki boshqa xalqaro sertifikatlarga ehtiyoj sezmasdan universitetga kirishingiz mumkin.  
  Milliy sertifikat sizning fanlardagi yutuqlaringizni tasdiqlaydi va universitetga kirish imkoniyatlaringizni sezilarli darajada oshiradi.
              </p>
            </div>

            {/* University Logos */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <img src="https://edu.uzbmb.uz/uploads/edu_logo/1699244995.539.png" alt="Andijon Davlat Tibbiyot Instituti" className="w-20 h-20 object-contain" />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <img src="https://edu.uzbmb.uz/uploads/edu_logo/1698997004.8841.png" alt="Farg‘ona jamoat salomatligi tibbiyot instituti" className="w-20 h-20 object-contain" />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <img src="https://edu.uzbmb.uz/uploads/edu_logo/1699245943.7734.png" alt="Toshkent Tibbiyot Akademiyasi" className="w-20 h-20 object-contain" />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-medium text-emerald-600 font-bold">10+</p>
                <p className="text-emerald-600/50 text-base mt-1 font-bold">universitetlar tan olishadi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
