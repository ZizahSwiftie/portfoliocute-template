import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import dicodingLogo from '../../assets/badges/dicodingLogo.png';
import ciscoLogo from '../../assets/badges/ciscoLogo.jpg';
import icosoLogo from '../../assets/badges/icosoLogo.jpg';
import hackTheBoxLogo from '../../assets/badges/hackTheBoxLogo.jpg';
import samsungLogo from '../../assets/badges/samsungLogo.png';
import pkmLogo from '../../assets/badges/pkmLogo.jpg';
import icitcomLogo from '../../assets/badges/icitcomLogo.png';
import kelasDigiLogo from '../../assets/badges/kelasDigiLogo.jpg';
import menaraPrestasiLogo from '../../assets/badges/menaraPrestasiLogo.jpg';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'dicoding-ml-systems',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Building Machine Learning Systems',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/N9ZONWOV8XG5',
      status: 'completed'
    },
    {
      id: 'dicoding-prompt-eng',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Prompt Engineering for Software Developers',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/6RPN70EK9X2M',
      status: 'completed'
    },
    {
      id: 'dicoding-ai-basics',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Introduction to AI Basics',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/N9ZONQV36XG5',
      status: 'completed'
    },
    {
      id: 'dicoding-ux-fundamentals',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'UX Design Fundamentals',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/98XW0YN9LXM3',
      status: 'completed'
    },
    {
      id: 'dicoding-principles-of-project-management',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Principles of Project Management',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/72ZDJNJLQZYW',
      status: 'completed'
    },
    {
      id: 'dicoding-google-cloud-fundamentals',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Google Cloud Fundamentals',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/GRX5WM5OKZ0M',
      status: 'completed'
    },
    {
      id: 'dicoding-data-science-fundamentals',
      image: dicodingLogo,
      alt: 'Dicoding Logo',
      title: 'Data Science Fundamentals',
      subtitle: 'Dicoding Indonesia',
      credentialUrl: 'https://www.dicoding.com/certificates/N9ZONQWG6XG5',
      status: 'completed'
    },
    {
      id: 'cisco-it-essentials-umy',
      image: ciscoLogo,
      alt: 'Cisco Logo',
      title: 'IT Essentials',
      subtitle: 'Cisco Networking Academy (UMY)',
      // no credentialUrl -> hanya file PDF, gak ada link publik
      status: 'completed'
    },
    {
      id: 'cisco-it-essentials',
      image: ciscoLogo,
      alt: 'Cisco Logo',
      title: 'IT Essentials',
      subtitle: 'Cisco',
      credentialUrl: 'https://www.credly.com/badges/42261c8c-1e96-4c66-9b8d-6bfc5524d47a/linked_in_profile', 
      status: 'completed'
    }
  ];

  const credentials = [
    {
      id: 'hackthebox-ctf-2025',
      image: hackTheBoxLogo,
      alt: 'Hack The Box Logo',
      title: 'University CTF 2025 – Certificate of Participation',
      subtitle: 'Solved 31/34 challenges, ranked 126th of 1,014 teams (Team Arcanists)',
      issuer: 'Hack The Box',
      issued: 'Dec 2025',
      status: 'completed'
      // no credentialUrl -> hanya ada file PDF sertifikat
    },
    {
      id: 'samsung-sft-finalist',
      image: samsungLogo,
      alt: 'Samsung Solve for Tomorrow Logo',
      title: 'Finalist – Samsung Solve for Tomorrow 2025',
      subtitle: 'University Category · Project: FreshLens AI',
      issuer: 'Samsung Solve for Tomorrow',
      issued: 'Oct 2025',
      credentialUrl: 'https://drive.google.com/file/d/1xbzqodKV5RdRJ_iRuT5csjkeWONR0RqX/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'samsung-sft-design-thinking',
      image: samsungLogo,
      alt: 'Samsung Solve for Tomorrow Logo',
      title: 'Design Thinking Workshop Participant',
      subtitle: 'User research, problem definition & prototyping',
      issuer: 'Samsung Solve for Tomorrow',
      issued: 'Jul 2025',
      credentialUrl: 'https://drive.google.com/file/d/1nLewxMk0n1j6uISkMaefgvoSV4tyTv8f/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'kelasdigi-ai-visual',
      image: kelasDigiLogo,
      alt: 'Kelas DiGi Logo',
      title: 'Workshop Participant – AI Visual',
      subtitle: 'AI for visual content creation & digital creativity',
      issuer: 'PT Kelas Digi Kreatif',
      issued: 'Aug 2025',
      credentialUrl: 'https://drive.google.com/file/d/1HMa3RCpI2AE9ApLu7QGAKPqi_TwonCzK/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'menaraprestasi-autotext',
      image: menaraPrestasiLogo,
      alt: 'Menara Prestasi Logo',
      title: 'Bootcamp Participant – Autotext',
      subtitle: 'Content automation, structured writing & text-based analysis',
      issuer: 'Menara Prestasi UNJ',
      issued: 'May - Jul 2025',
      credentialUrl: 'https://drive.google.com/file/d/1Vv-GZBred764KRcbkiZOm1eCjxHitLxp/view?usp=drive_link',
      status: 'completed'
    }
    {
      id: 'icosi-2026-audience',
      image: icosoLogo,
      alt: 'ICoSI Logo',
      title: 'ICoSI 2026 – Audience Participant',
      subtitle: 'The 10th International Conference on Sustainable Innovation',
      issuer: 'Universitas Muhammadiyah Yogyakarta',
      issued: 'Aug 2026',
      credentialUrl: 'https://drive.google.com/file/d/1oDM30luzDKcXB9SUE1c-bps3waBnaWu_/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'pkm-kc-3rd-place',
      image: pkmLogo,
      alt: 'PKM-KC Logo',
      title: '3rd Place – Student Creativity Program (PKM-KC)',
      subtitle: 'FireLine AI: robotic fire detection & suppression system using YOLOv8',
      issuer: 'Fakultas Teknik, Universitas Muhammadiyah Yogyakarta',
      issued: 'Jan 2025',
      credentialUrl: 'https://drive.google.com/file/d/1cPn9x4DMSIhmZ7a5pMmSWbPBK2_xaj42/view?usp=drive_link',
      status: 'completed'
    },
    {
      id: 'icosi-icitcom-presenter',
      image: icitcomLogo,
      alt: 'ICoSI / ICITCOM Logo',
      title: 'ICITCOM 2026 – Presenter',
      subtitle: 'Presented research on YOLOv5 vs YOLOv8 for edge-based pest monitoring',
      issuer: 'International Conference on Information Technology and Computing (ICITCOM)',
      issued: 'Aug 2026',
      credentialUrl: 'https://drive.google.com/file/d/1OGB1tEuWwDma05M5fCvEwW3fNqT8alo0/view?usp=drive_link',
      status: 'completed'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
