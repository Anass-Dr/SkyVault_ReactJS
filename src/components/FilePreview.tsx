import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function FilePreview({ blob, fileKey }: { blob: Blob; fileKey?: string }) {
  const url = URL.createObjectURL(blob);

  const handleDownload = () => {
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = fileKey || "document";
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-full h-screen p-4 flex flex-col items-center">
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Download File
        </button>
      </div>
      <DocViewer
        documents={[
          {
            uri: url,
            fileName: fileKey || "document",
          },
        ]}
        pluginRenderers={DocViewerRenderers}
        className="h-[90vh] w-full"
        style={{ height: "90vh" }}
      />
    </div>
  );
}

export default FilePreview;
