import { useEffect } from "react";
import { Accordion } from "flowbite-react";
import Select from "react-select";
import "./add-program.scss";
// Components
import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";
// Images
import Close from "../../assets/images/dashboard/close.png";
import PlusRed from "../../assets/images/dashboard/plus-red.png";

const options = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
];
const AddProgram = ({ togglePrograms, handleOverlay }) => {
  // Close Add Program From Clicking On Window
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (e.target.className === "overlay") {
        handleOverlay();
      }
    });
  }, []);
  return (
    <div
      className={`add-program center bg-white z-10 p-16 ${
        togglePrograms ? "show" : "hide"
      }`}
    >
      <div className="add-program-container">
        <div className="create flex justify-between items-center mb-8">
          <p className="text-primary">إنشاء برنامج جديد</p>
          <div className="cursor-pointer" onClick={handleOverlay}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <div className="import mb-8">
          <SecondaryButton context="استيراد من برنامج" image={PlusRed} />
        </div>
        <div className="program-name mb-6">
          <Select options={options} />
        </div>
        <div className="accordion-wrapper mb-6">
          <Accordion flush={true}>
            <Accordion.Panel>
              <Accordion.Title>وجبة الإفطار</Accordion.Title>
              <Accordion.Content>
                <p className="">الوجبة الأولى</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>وجبة العشاء</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>وجبة الغذاء</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="buttons">
          <div className="main mb-6 cursor-pointer">
            <MainButton context="حفظ" />
          </div>
          <div className="secondary cursor-pointer">
            <SecondaryButton context="إلغاء" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProgram;
