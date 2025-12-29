// prisma/seed.ts

import { PrismaClient, Role, StatusCerita } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...\n');

  // ==================== 1. CLEAR EXISTING DATA ====================
  console.log('🗑️  Clearing existing data...');
  await prisma.hasilQuiz.deleteMany();
  await prisma.progres.deleteMany();
  await prisma.favorit.deleteMany();
  await prisma.pilihanJawaban.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.scene.deleteMany();
  await prisma.cerita.deleteMany();
  await prisma.kategori.deleteMany();
  await prisma.user.deleteMany();
  await prisma.appSetting.deleteMany();
  console.log('   ✓ Data cleared\n');

  // ==================== 2. CREATE CATEGORIES ====================
  console.log('📁 Creating categories...');
  const kategoriData = [
    { nama: 'Legenda', icon: '🏛️' },
    { nama: 'Fabel', icon: '🦊' },
    { nama: 'Mitos', icon: '🌙' },
    { nama: 'Dongeng', icon: '✨' },
    { nama: 'Sage', icon: '⚔️' },
  ];

  const kategoris = await Promise.all(
    kategoriData.map((data) =>
      prisma.kategori.create({ data })
    )
  );
  console.log(`   ✓ ${kategoris.length} categories created\n`);

  // ==================== 3. CREATE ADMIN USER ====================
  console.log('👤 Creating admin user...');
  const hashedAdminPassword = await bcrypt.hash('Admin123!', 12);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@ceritarakyat.id',
      password: hashedAdminPassword,
      nama: 'Administrator',
      role: Role.ADMIN,
      isActive: true,
    },
  });
  console.log(`   ✓ Admin: ${admin.email} / Admin123!\n`);

  // ==================== 4. CREATE SAMPLE USER ====================
  console.log('👤 Creating sample user...');
  const hashedUserPassword = await bcrypt.hash('User123!', 12);
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: hashedUserPassword,
      nama: 'John Doe',
      role: Role.USER,
      isActive: true,
    },
  });
  console.log(`   ✓ User: ${user.email} / User123!\n`);

  // ==================== 5. CREATE SAMPLE CERITA ====================
  console.log('📖 Creating sample stories...');
  
  const kategoriLegenda = kategoris.find((k) => k.nama === 'Legenda')!;
  const kategoriFabel = kategoris.find((k) => k.nama === 'Fabel')!;

  // Cerita 1: Malin Kundang
  const malinKundang = await prisma.cerita.create({
    data: {
      judul: 'Malin Kundang',
      deskripsi: 'Kisah anak durhaka dari Sumatera Barat yang dikutuk menjadi batu oleh ibunya.',
      thumbnail: 'https://example.com/images/malin-kundang.jpg',
      status: StatusCerita.PUBLISHED,
      kategoriId: kategoriLegenda.id,
    },
  });

  // Cerita 2: Kancil dan Buaya
  const kancilBuaya = await prisma.cerita.create({
    data: {
      judul: 'Kancil dan Buaya',
      deskripsi: 'Kisah kecerdikan Kancil dalam menghadapi Buaya yang ingin memangsanya.',
      thumbnail: 'https://example.com/images/kancil-buaya.jpg',
      status: StatusCerita.PUBLISHED,
      kategoriId: kategoriFabel.id,
    },
  });

  console.log(`   ✓ 2 stories created\n`);

  // ==================== 6. CREATE SCENES ====================
  console.log('🎬 Creating scenes...');

  // Scenes for Malin Kundang
  const malinScenes = [
    {
      urutan: 1,
      gambar: 'https://example.com/scenes/malin-1.jpg',
      teks: 'Di sebuah desa kecil di pesisir Sumatera Barat, hiduplah seorang janda miskin bernama Mande Rubayah bersama anak laki-lakinya, Malin Kundang.',
      audio: 'https://example.com/audio/malin-1.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 2,
      gambar: 'https://example.com/scenes/malin-2.jpg',
      teks: 'Malin tumbuh menjadi anak yang rajin dan berbakti. Setiap hari ia membantu ibunya mencari nafkah dengan membantu nelayan di pantai.',
      audio: 'https://example.com/audio/malin-2.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 3,
      gambar: 'https://example.com/scenes/malin-3.jpg',
      teks: 'Suatu hari, Malin memutuskan untuk merantau mencari kehidupan yang lebih baik. Dengan berat hati, ibunya melepas kepergiannya.',
      audio: 'https://example.com/audio/malin-3.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 4,
      gambar: 'https://example.com/scenes/malin-4.jpg',
      teks: 'Bertahun-tahun berlalu, Malin berhasil menjadi saudagar kaya raya. Ia memiliki kapal dagang besar dan menikah dengan putri bangsawan.',
      audio: 'https://example.com/audio/malin-4.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 5,
      gambar: 'https://example.com/scenes/malin-5.jpg',
      teks: 'Suatu hari, kapal Malin berlabuh di kampung halamannya. Mande Rubayah sangat bahagia dan berlari ke pantai menemui anaknya.',
      audio: 'https://example.com/audio/malin-5.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 6,
      gambar: 'https://example.com/scenes/malin-6.jpg',
      teks: '"Malin, anakku!" seru Mande Rubayah. Namun Malin malu dan tidak mengakui ibunya. "Aku tidak mengenalmu!" bentaknya.',
      audio: 'https://example.com/audio/malin-6.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 7,
      gambar: 'https://example.com/scenes/malin-7.jpg',
      teks: 'Hati Mande Rubayah hancur. Ia berdoa, "Ya Allah, jika dia anakku, kutuklah dia menjadi batu!" Langit berubah gelap.',
      audio: 'https://example.com/audio/malin-7.mp3',
      ceritaId: malinKundang.id,
    },
    {
      urutan: 8,
      gambar: 'https://example.com/scenes/malin-8.jpg',
      teks: 'Badai dahsyat menghantam. Malin dan kapalnya berubah menjadi batu. Hingga kini batu itu masih ada di Pantai Air Manis, Padang.',
      audio: 'https://example.com/audio/malin-8.mp3',
      ceritaId: malinKundang.id,
    },
  ];

  // Scenes for Kancil dan Buaya
  const kancilScenes = [
    {
      urutan: 1,
      gambar: 'https://example.com/scenes/kancil-1.jpg',
      teks: 'Di sebuah hutan, hiduplah seekor Kancil yang cerdik. Suatu hari ia ingin menyeberangi sungai yang penuh buaya.',
      audio: 'https://example.com/audio/kancil-1.mp3',
      ceritaId: kancilBuaya.id,
    },
    {
      urutan: 2,
      gambar: 'https://example.com/scenes/kancil-2.jpg',
      teks: 'Kancil berpikir keras. Tiba-tiba ia mendapat ide cemerlang untuk mengelabui para buaya.',
      audio: 'https://example.com/audio/kancil-2.mp3',
      ceritaId: kancilBuaya.id,
    },
    {
      urutan: 3,
      gambar: 'https://example.com/scenes/kancil-3.jpg',
      teks: '"Hai Buaya! Raja ingin menghitung jumlah kalian. Berbarislah!" seru Kancil dengan percaya diri.',
      audio: 'https://example.com/audio/kancil-3.mp3',
      ceritaId: kancilBuaya.id,
    },
    {
      urutan: 4,
      gambar: 'https://example.com/scenes/kancil-4.jpg',
      teks: 'Para buaya berbaris dari tepi ke tepi sungai. Kancil melompati punggung mereka sambil berpura-pura menghitung.',
      audio: 'https://example.com/audio/kancil-4.mp3',
      ceritaId: kancilBuaya.id,
    },
    {
      urutan: 5,
      gambar: 'https://example.com/scenes/kancil-5.jpg',
      teks: 'Sampai di seberang, Kancil tertawa. "Terima kasih buaya bodoh!" Para buaya baru sadar telah ditipu.',
      audio: 'https://example.com/audio/kancil-5.mp3',
      ceritaId: kancilBuaya.id,
    },
  ];

  await prisma.scene.createMany({ data: malinScenes });
  await prisma.scene.createMany({ data: kancilScenes });
  console.log(`   ✓ ${malinScenes.length + kancilScenes.length} scenes created\n`);

  // ==================== 7. CREATE QUIZZES ====================
  console.log('❓ Creating quizzes...');

  // Quiz for Malin Kundang
  const malinQuizzes = [
    {
      pertanyaan: 'Siapa nama ibu Malin Kundang?',
      urutan: 1,
      ceritaId: malinKundang.id,
      pilihan: [
        { teks: 'Dayang Sumbi', isBenar: false },
        { teks: 'Mande Rubayah', isBenar: true },
        { teks: 'Dewi Nawang', isBenar: false },
        { teks: 'Putri Tangguk', isBenar: false },
      ],
    },
    {
      pertanyaan: 'Dari daerah mana cerita Malin Kundang berasal?',
      urutan: 2,
      ceritaId: malinKundang.id,
      pilihan: [
        { teks: 'Jawa Barat', isBenar: false },
        { teks: 'Sumatera Utara', isBenar: false },
        { teks: 'Sumatera Barat', isBenar: true },
        { teks: 'Kalimantan', isBenar: false },
      ],
    },
    {
      pertanyaan: 'Apa yang terjadi pada Malin Kundang di akhir cerita?',
      urutan: 3,
      ceritaId: malinKundang.id,
      pilihan: [
        { teks: 'Menjadi raja', isBenar: false },
        { teks: 'Dikutuk menjadi batu', isBenar: true },
        { teks: 'Kembali ke ibunya', isBenar: false },
        { teks: 'Tenggelam di laut', isBenar: false },
      ],
    },
  ];

  // Quiz for Kancil dan Buaya
  const kancilQuizzes = [
    {
      pertanyaan: 'Bagaimana cara Kancil menyeberangi sungai?',
      urutan: 1,
      ceritaId: kancilBuaya.id,
      pilihan: [
        { teks: 'Berenang', isBenar: false },
        { teks: 'Melompati punggung buaya', isBenar: true },
        { teks: 'Menggunakan rakit', isBenar: false },
        { teks: 'Melewati jembatan', isBenar: false },
      ],
    },
    {
      pertanyaan: 'Apa alasan Kancil meminta buaya berbaris?',
      urutan: 2,
      ceritaId: kancilBuaya.id,
      pilihan: [
        { teks: 'Untuk bermain', isBenar: false },
        { teks: 'Untuk lomba', isBenar: false },
        { teks: 'Pura-pura menghitung untuk raja', isBenar: true },
        { teks: 'Untuk foto bersama', isBenar: false },
      ],
    },
  ];

  for (const quiz of [...malinQuizzes, ...kancilQuizzes]) {
    const { pilihan, ...quizData } = quiz;
    await prisma.quiz.create({
      data: {
        ...quizData,
        pilihan: {
          create: pilihan,
        },
      },
    });
  }
  console.log(`   ✓ ${malinQuizzes.length + kancilQuizzes.length} quizzes created\n`);

  // ==================== 8. CREATE APP SETTINGS ====================
  console.log('⚙️  Creating app settings...');
  const settings = [
    { key: 'app_name', value: 'Cerita Rakyat Indonesia' },
    { key: 'app_version', value: '1.0.0' },
    { key: 'maintenance_mode', value: 'false' },
    { key: 'contact_email', value: 'support@ceritarakyat.id' },
  ];

  await prisma.appSetting.createMany({ data: settings });
  console.log(`   ✓ ${settings.length} settings created\n`);

  // ==================== SUMMARY ====================
  console.log('═══════════════════════════════════════════');
  console.log('✅ Database seeding completed successfully!');
  console.log('═══════════════════════════════════════════');
  console.log('\n📋 Summary:');
  console.log('   • Categories: 5');
  console.log('   • Users: 2 (1 admin, 1 user)');
  console.log('   • Stories: 2');
  console.log('   • Scenes: 13');
  console.log('   • Quizzes: 5');
  console.log('   • Settings: 4');
  console.log('\n🔐 Login Credentials:');
  console.log('   • Admin: admin@ceritarakyat.id / Admin123!');
  console.log('   • User:  user@example.com / User123!');
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
