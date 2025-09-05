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
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">BIO</span>
                </div>
                <p className="text-xs text-slate-600">Biologiya</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">CHEM</span>
                </div>
                <p className="text-xs text-slate-600">Kimyo</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">UZT</span>
                </div>
                <p className="text-xs text-slate-600">Ona tili</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-medium text-emerald-600">20+</p>
                <p className="text-emerald-600/50 text-base">maktablar bizga ishonishadi</p>
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
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">ADTI</span>
                </div>
                <p className="text-xs text-slate-600">Andijon Davlat Tibbiyot Instituti</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">FDTI</span>
                </div>
                <p className="text-xs text-slate-600">Farg‘ona Davlat Tibbiyot Instituti</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">TTA</span>
                </div>
                <p className="text-xs text-slate-600">Toshkent Tibbiyot Akademiyasi</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-medium text-emerald-600">10+</p>
                <p className="text-emerald-600/50 text-base mt-1">universitetlar tan olishadi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
