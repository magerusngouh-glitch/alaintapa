import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, TrendingUp, PlayCircle, Calculator, Cpu, HelpCircle, ShieldCheck, UserPlus, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenu = [
    {
      title: 'Opportunité',
      id: 'opportunity',
      items: [
        { name: 'Investir', href: '#investir', desc: 'Découvrez la réalité du marché', icon: TrendingUp },
        { name: 'Vidéos', href: '#videos', desc: 'Présentations et tutoriels', icon: PlayCircle },
        { name: 'Simulateur', href: '#table', desc: 'Calculez vos gains potentiels', icon: Calculator },
      ]
    },
    {
      title: 'Plateforme',
      id: 'platform',
      items: [
        { name: 'XMEV AI', href: '#xmev', desc: 'Notre technologie d\'arbitrage', icon: Cpu },
        { name: 'Documents', href: '#ressources', desc: 'Présentations PDF officielles', icon: FileText },
        { name: 'Comment ça marche', href: '#comment', desc: 'Guide étape par étape', icon: HelpCircle },
        { name: 'Transparence', href: '#transparence', desc: 'Sécurité et audits réels', icon: ShieldCheck },
      ]
    }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>XMEV.AI</a>

        {/* Desktop Nav */}
        <div className="nav-desktop-wrapper">
          <ul className="nav-desktop">
            <li><a href="#home" className="nav-link" onClick={handleLinkClick}>Accueil</a></li>

            {megaMenu.map((category) => (
              <li
                key={category.id}
                className="nav-item-has-dropdown"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`nav-link dropdown-trigger ${activeDropdown === category.id ? 'active' : ''}`}>
                  {category.title} <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {activeDropdown === category.id && (
                    <motion.div
                      className="mega-menu"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mega-menu-content">
                        {category.items.map((item) => (
                          <a key={item.name} href={item.href} className="mega-menu-item" onClick={handleLinkClick}>
                            <div className="mega-menu-icon" style={{ background: category.id === 'opportunity' ? 'var(--primary-light)' : 'var(--secondary-light)' }}>
                              <item.icon size={20} color="white" />
                            </div>
                            <div className="mega-menu-text">
                              <span className="mega-menu-name">{item.name}</span>
                              <span className="mega-menu-desc">{item.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <a href="https://xmev.ai?inviteCode=2CZHNWWA" className="nav-cta">
            <UserPlus size={18} />
            S'inscrire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-list">
              <li><a href="#home" className="mobile-nav-link" onClick={handleLinkClick}>Accueil</a></li>

              {megaMenu.map((category) => (
                <li key={category.id} className="mobile-category">
                  <span className="mobile-category-title">{category.title}</span>
                  <div className="mobile-subcategory-list">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link sublink"
                        onClick={handleLinkClick}
                      >
                        <item.icon size={18} />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </li>
              ))}

              <li>
                <a
                  href="https://xmev.ai?inviteCode=2CZHNWWA"
                  className="mobile-nav-link cta"
                  onClick={handleLinkClick}
                >
                  <UserPlus size={18} />
                  S'inscrire sur XMEV.AI
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
