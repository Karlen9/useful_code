import Image from "next/image";

export const carouselLogos = {
  cowSwap: {
    href: "https://cow.fi/",
    src: "/cow-swap.png",
    Logo: () => (
      <Image
        src={"/cow-swap.png"}
        alt={"cow swap"}
        width={"200"}
        height={"40"}
      />
    ),
  },
  thorchain: {
    href: "https://thorchain.org/",
    src: "/thorchain.png",
    Logo: () => (
      <Image
        src={"/thorchain.png"}
        alt={"thorchain"}
        width={"180"}
        height={"40"}
      />
    ),
  },
  onramper: {
    href: "https://www.onramper.com/",
    src: "/onramper.png",
    Logo: () => (
      <Image
        src={"/onramper.png"}
        alt={"onramper"}
        width={"190"}
        height={"40"}
      />
    ),
  },
  nownodes: {
    href: "https://nownodes.io/",
    src: "/nownodes.png",
    Logo: () => (
      <Image
        src={"/nownodes.png"}
        alt={"nownodes"}
        width={"160"}
        height={"40"}
      />
    ),
  },
  banxa: {
    href: "https://banxa.com/",
    src: "/banxa.png",
    Logo: () => (
      <Image src={"/banxa.png"} alt={"banxa"} width={"170"} height={"40"} />
    ),
  },
  zerion: {
    href: "https://zerion.io/",
    src: "/zerion.png",
    Logo: () => (
      <Image src={"/zerion.png"} alt={"zerion"} width={"170"} height={"40"} />
    ),
  },
  lifi: {
    href: "https://li.fi/",
    src: "/lifi.png",
    Logo: () => (
      <Image src={"/lifi.png"} alt={"lifi"} width={"100"} height={"40"} />
    ),
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ox: {
    href: "https://0x.org/",
    src: "/0x.png",
    Logo: () => <Image src={"/0x.png"} alt={"0x"} width={"55"} height={"40"} />,
  },
};
