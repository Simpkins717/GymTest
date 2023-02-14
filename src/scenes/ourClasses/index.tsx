import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes = [
  {
    name: "weight Training Classes",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image1,
  },
  {
    name: "Training",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image2,
  },
  {
    name: "Fitness Training Classes",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image3,
  },
  {
    name: "Adventure Training Classes",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image4,
  },
  {
    name: "Yoga Training Classes",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image5,
  },
  {
    name: "Abs & Core Training Classes",
    description:
      " Ut varius tincidunt libero. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce neque. Vivamus aliquet elit ac nisl.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Nulla porta dolor. Donec elit libero, sodales nec, volutpat a,
              suscipit non, turpis. Phasellus ullamcorper ipsum rutrum nunc.
              Vestibulum fringilla pede sit amet augue. Suspendisse faucibus,
              nunc et pellentesque egestas, lacus ante convallis tellus, vitae
              iaculis lacus elit id tortor. Nulla porta dolor. Ut non enim
              eleifend felis pretium feugiat. Morbi mattis ullamcorper velit.
              Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.
              Quisque malesuada placerat nisl.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
