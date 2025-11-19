import HTMLFlipBook from "react-pageflip";

const MenuSlider = () => {
  const menuPages = [
    {
      id: 1,
      image: "/images/menu/menu1.jpg",
    },
    {
      id: 2,
      image: "/images/menu/menu2.jpg",
    },
    {
      id: 3,
      image: "/images/menu/menu3.jpg",
    },
    {
      id: 4,
      image: "/images/menu/menu4.jpg",
    },
    {
      id: 5,
      image: "/images/menu/menu5.jpg",
    },
    {
      id: 6,
      image: "/images/menu/menu6.jpg",
    },
    {
      id: 7,
      image: "/images/menu/menu7.jpg",
    },
    {
      id: 8,
      image: "/images/menu/menu8.jpg",
    },
    {
      id: 9,
      image: "/images/menu/menu9.jpg",
    },
    {
      id: 10,
      image: "/images/menu/menu10.jpg",
    },
    {
      id: 11,
      image: "/images/menu/menu11.jpg",
    },
    {
      id: 12,
      image: "/images/menu/menu12.jpg",
    },
    {
      id: 13,
      image: "/images/menu/menu-back-cover.jpg",
    },
  ];

  return (
    //@ts-ignore
    <HTMLFlipBook
      width={400}
      height={600}
      maxShadowOpacity={0.5}
      showCover={true}
      size="fixed"
    >
      <div className="page">
        <div className="page-content cover">
          <img src="/images/menu/menu-cover.jpg" alt="menu cover" />
        </div>
      </div>

      {menuPages.map((menu) => (
        <div className="page" key={menu.id}>
          <img src={menu.image} alt={`menu page ${menu.id}`} />
        </div>
      ))}
    </HTMLFlipBook>
  );
};

export default MenuSlider;
