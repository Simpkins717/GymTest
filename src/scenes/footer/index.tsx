import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Maecenas nec odio et ante tincidunt tempus. In turpis. Phasellus
            ullamcorper ipsum rutrum nunc. Aenean massa. Aliquam lobortis.
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            {" "}
            Fusce convallis metus id felis luctus adipiscing.
          </p>
          <p className="my-5">Morbi vestibulum volutpat enim. </p>
          <p>Etiam mollos felis</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros,
            sed gravida augue augue mollis justo.
          </p>
          <p className="my-5">
            Maecenas egestas arcu quis ligula mattis placerat.{" "}
          </p>
          <p>(555)555-1234</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
