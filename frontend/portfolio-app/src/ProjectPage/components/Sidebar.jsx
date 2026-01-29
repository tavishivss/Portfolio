import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    'Residencial',
    'Comercial',
    'Hotelero',
    'Concursos',
    'Conceptual',
    'Nosotros',
    'Contacto'
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="sidebar-menu-item">
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
