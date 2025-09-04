import { Award, GraduationCap } from "lucide-react"

export default function CertificatesPower() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="pt-10">
          <h2 className="text-emerald-600 text-4xl font-bold mb-2 text-center xl:text-5xl">Sertifikatlarimiz kuchi</h2>
          <p className="text-emerald-600 text-base opacity-50 mb-10 text-center md:text-lg xl:text-xl max-w-2xl mx-auto">
            Kelajagingizni yo'l oching – bizning sertifikatlarimiz universitetga kirish va kasbiy faoliyatga eshiklarni
            ochadi!
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
                Bizning sertifikatlar eng top ish beruvchilar tomonidan e'tirof etilgan bo'lib, ish topishingizga yordam
                beradi. Undan tashqari, biz professional rezyumeingizni yaratish uchun 'CV builder' xizmatini taklif
                etamiz.
              </p>
            </div>

            {/* Company Logos */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">BT</span>
                </div>
                <p className="text-xs text-slate-600">BioTech</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">CL</span>
                </div>
                <p className="text-xs text-slate-600">ChemLab</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <p className="text-xs text-slate-600">MedScience</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-medium text-emerald-600">15+</p>
                <p className="text-emerald-600/50 text-base">kompaniyalar bizga ishonishadi</p>
              </div>
            </div>
          </div>

          {/* Certificate Banner */}
          <div className="h-full overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover"
              src="/placeholder.svg?height=400&width=300"
              alt="Qosimov School Certificate"
            />
          </div>

          {/* University Recognition */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="col-span-2 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <p className="text-slate-600 text-base xl:text-lg">
                Bizning sertifikatlarimiz mamlakatdagi eng yaxshi universitetlar tomonidan tan olingan bo'lib, bu
                yordamida siz IELTS sertifikatiga ehtiyoj sezmasdan universitetga kirishingiz mumkin.
              </p>
            </div>

            {/* University Logos */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">NU</span>
                </div>
                <p className="text-xs text-slate-600">NUUz</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">TU</span>
                </div>
                <p className="text-xs text-slate-600">TATU</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-lg">SU</span>
                </div>
                <p className="text-xs text-slate-600">SamDU</p>
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
  )
}
