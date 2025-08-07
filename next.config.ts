/** @type {import('next').NextConfig} */
const nextConfig = {
  // Diğer Next.js yapılandırmalarınız buraya gelebilir
  // Örneğin: reactStrictMode: true, vb.

  webpack: (config, { isServer }) => {
    // Bu kod parçacığı, Webpack'e (Next.js'in kullandığı paketleyici),
    // istemci tarafı (tarayıcı) derlemesi yaparken 'fs' modülüyle
    // karşılaştığında ne yapması gerektiğini söyler.
    // isServer: false demek, 'bu kod sunucu için değil, tarayıcı için çalışacak' demektir.
    if (!isServer) {
      config.resolve.fallback = {
        // 'fs' modülü istendiğinde, yerine hiçbir şey koyma, yani 'false' olarak çöz.
        // Bu, o modülün tarayıcıda çalışmasını engeller.
        fs: false,

        // Benzer şekilde, bazen diğer Node.js modülleri de sorun çıkarabilir.
        // İhtiyaç duyarsanız, diğerleri için de buraya ekleme yapabilirsiniz:
        // path: false, // veya require.resolve('path-browserify'), gibi
        // os: false,
        // crypto: false,
        // stream: false,
        // assert: false,
        // http: false,
        // https: false,
        // url: false
      };
    }

    // Değiştirilmiş yapılandırmayı geri döndür.
    return config;
  },
};

// Bu yapılandırma dosyasını dışa aktar.
module.exports = nextConfig;