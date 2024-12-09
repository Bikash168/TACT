import Layout from "../components/Layout";

export default function MandatoryDisclosure() {
  return (
    <Layout title="Mandatory Disclosure | Trident Group of Institutions">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600">Mandatory Disclosure</h2>
          <p className="mt-4 text-lg text-gray-600">
            Complying with statutory requirements for transparency and accountability.
          </p>
        </div>
      </section>

      {/* Disclosure Content */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Institutional Information</h3>
        <div className="bg-white shadow p-6 rounded-lg space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Name of the Institution:</h4>
            <p className="text-gray-600">Trident Group of Institutions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Address:</h4>
            <p className="text-gray-600">
              Chandaka Industrial Estate,  
              Bhubaneswar, Odisha - 751024
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Contact Number:</h4>
            <p className="text-gray-600">+91-12345-67890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Email:</h4>
            <p className="text-gray-600">info@trident.ac.in</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Website:</h4>
            <p className="text-gray-600">www.trident.ac.in</p>
          </div>
        </div>
      </section>

      {/* Approvals and Affiliations */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Approvals and Affiliations</h3>
        <div className="bg-white shadow p-6 rounded-lg space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">AICTE Approval:</h4>
            <p className="text-gray-600">
              Approved by All India Council for Technical Education (AICTE).
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Affiliations:</h4>
            <p className="text-gray-600">
              Affiliated to Biju Patnaik University of Technology (BPUT), Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Key Documents */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Key Documents</h3>
        <div className="bg-gray-50 shadow p-6 rounded-lg space-y-4">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a
                href="/documents/AICTE-Approval-Letter.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                AICTE Approval Letter
              </a>
            </li>
            <li>
              <a
                href="/documents/Affiliation-Letter-BPUT.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Affiliation Letter with BPUT
              </a>
            </li>
            <li>
              <a
                href="/documents/Academic-Audit-Report.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Academic Audit Report
              </a>
            </li>
            <li>
              <a
                href="/documents/Annual-Report.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Annual Report
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Additional Details */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Additional Details</h3>
        <div className="bg-white shadow p-6 rounded-lg space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Student Strength:</h4>
            <p className="text-gray-600">1000+ students across various disciplines.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Faculty Details:</h4>
            <p className="text-gray-600">
              Qualified and experienced faculty with a student-teacher ratio of 15:1.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
