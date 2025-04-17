import type React from 'react';
import ProfileHeader from './components/ProfileHeader';
import BioLink from './components/BioLink';
import { Decoration } from './components/Decorations';
import { NailPolishIcon, NailFileIcon, HeartIcon, SparkleIcon } from './components/NailIcons';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaCalendarAlt, FaTiktok, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen font-poppins">
      <Decoration />

      <div className="mx-auto max-w-md px-4 py-10">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-7 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 h-10 w-10 border-t-4 border-l-4 border-nail-pink rounded-tl-lg opacity-50" />
          <div className="absolute top-0 right-0 h-10 w-10 border-t-4 border-r-4 border-nail-pink rounded-tr-lg opacity-50" />
          <div className="absolute bottom-0 left-0 h-10 w-10 border-b-4 border-l-4 border-nail-pink rounded-bl-lg opacity-50" />
          <div className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-nail-pink rounded-br-lg opacity-50" />

          <ProfileHeader
            image="/images/profile.png"
            title="Julien Nail Design"
            subtitle="Especialista em designs artisticos e unicos"
          />

          <div className="mt-10 space-y-3">
            <h2 className="flex items-center gap-2 text-lg font-medium text-nail-red mb-5">
              <SparkleIcon size={16} />
              <span>Siga-nos & Agende</span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <BioLink
                icon={<FaInstagram size={20} />}
                text="Instagram"
                url="https://instagram.com/julienrochxnails"
                delay={1}
              />

              <BioLink
                icon={<FaTiktok size={20} />}
                text="TikTok"
                url="https://tiktok.com/julienrochxnails"
                delay={2}
              />
            </div>

            <BioLink
              icon={<FaWhatsapp size={20} />}
              text="Agende pelo WhatsApp"
              url="https://wa.me/5521991498444"
              delay={3}
            />

            <h2 className="flex items-center gap-2 text-lg font-medium text-nail-red mt-8 mb-5">
              <NailPolishIcon size={16} />
              <span>Serviços & Informações</span>
            </h2>

           

            <BioLink
              icon={<NailFileIcon size={20} />}
              text="Tabela de preços"
              url="/public/pdf/abela.pdf"
              delay={6}
            />

            <BioLink
              icon={<FaMapMarkerAlt size={20} />}
              text="Como chegar"
              url="https://maps.app.goo.gl/niPU9wqsjzWDkVE37"
              delay={7}
            />

           
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="flex items-center gap-1 text-xs text-nail-pink">
              <HeartIcon size={14} />
              <span>© {currentYear} Nail Design Studio</span>
              <HeartIcon size={14} />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
