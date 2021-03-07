import { jsPDF } from "jspdf";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDropzone } from "react-dropzone";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
function FileUpload(props) {
  const [files, setFiles] = useState([]);
  const [progressInstance, setProgressInstance] = useState([]);
  const [now, setNow] = useState(0);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {borderColor: "#FF8C00",}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  useEffect(() => {
    setProgressInstance(<ProgressBar now={now} label={now} animated="true" />);
  }, [now]);
  const pdfgen = () => {
    var doc = new jsPDF();
    if (doc) {
      setTimeout(() => {
        setNow(50);
      }, 300);
    }
    doc.setFontSize(40);
    files.forEach((file) => {
      doc.addPage(doc.addImage(file.preview, "JPEG", 15, 15, 150, 150));
    });

    doc.save("pdfGenaratedByShams.pdf");
    setTimeout(() => {
      setNow(100);
    }, 800);
    setTimeout(() => {
      setNow(0);
    }, 1000);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} alt={file.name} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <p className="navy">Drag 'n' drop your images here, or click to select images</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <Button className="m-2" disabled={now} variant="warning" onClick={pdfgen}>
        {now === 0 ? "Make PDF" : "Combining Images"}
      </Button>
      <div>{now === 0 ? "" : progressInstance}</div>
    </section>
  );
}

<FileUpload />;
export default FileUpload;
