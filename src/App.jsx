import generatePDF, { Resolution, Margin } from "react-to-pdf";

function App() {
  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "A4",
      // default is 'portrait'
      orientation: "portrait",
    },
  };

  const getTargetElement = () => document.getElementById("content-id");
  return (
    <>
      <button onClick={() => generatePDF(getTargetElement, options)}>
        gerar PDF
      </button>
      <div id="content-id">
        <h1>pdf gerado</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatum, quaerat quod obcaecati quis itaque? Iusto veritatis maxime
          enim dignissimos fuga facere dolore delectus, est adipisci laborum
          quas odit ab?
        </p>
      </div>
    </>
  );
}

export default App;
