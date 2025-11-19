import DocumentList from "./_components/DocumentList";
import FileUploadPanel from "./_components/FileUploadPanel";
import Tile from "../ui/Tile";
import {
  DOCUMENT_TYPES,
  getDocuments,
} from "../services/documents/getDocuments";

const documentTypeOrder = Object.values(DOCUMENT_TYPES);

function formatMegabytes(bytes = 0) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default async function AdminPage() {
  const documents = await getDocuments();

  const totalSize = documents.reduce(
    (accumulator, document) => accumulator + document.sizeInBytes,
    0
  );

  return (
    <div className="flex flex-col gap-8">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Tile
          label="Total documents"
          value={documents.length}
          helper="Across all categories"
        />
        <Tile
          label="Storage footprint"
          value={formatMegabytes(totalSize)}
          helper="Approximate size"
        />
        <Tile
          label="Formats managed"
          value={documentTypeOrder.length}
          helper="Expandable via services"
        />
      </section>

      <FileUploadPanel />

      <DocumentList documents={documents} />
    </div>
  );
}

