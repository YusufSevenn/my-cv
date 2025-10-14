import { Card } from "flowbite-react";

export function About() {
  return (
    <Card href="#" className="max-w-sm -mt-16 border-2 border-gray-500 shadow-lg">
      <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
        Hakkımda
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400" >
        26.03.2003 tarihinde Aydın'da doğdum. Bilgisayar Mühendisliği lisans bölümü eğitimimi Denizli Pamukkale Üniversitesi'nde
        tamamladıktan sonra İtalya'da Sapienza Üniversitessi'nde yüksek lisans yaptım. Şu anda ise bu yola beraber çıktığım arkadaşımla
        kurduğumuz yazılım şirketinde çalışmaktayım.
      </p>
    </Card>
  )
}