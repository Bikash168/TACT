import Layout from "../components/Layout";

export default function AICTEApprovals() {
  return (
    <Layout title="AICTE Approvals | Trident Group of Institutions">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600">AICTE Approvals</h2>
          <p className="mt-4 text-lg text-gray-600">
            Committed to excellence with statutory compliance and transparency.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">About AICTE Approvals</h3>
        <p className="text-gray-700 leading-7">
          The All India Council for Technical Education (AICTE) is the statutory body that grants 
          approval to institutions for offering technical education programs in India. Trident Group 
          of Institutions complies with all regulatory requirements and maintains transparency in 
          its operations. Below is a detailed list of our AICTE approval details and letters.
        </p>
      </section>

      {/* Approval Letters Section */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">AICTE Approval Letters</h3>
        <div className="bg-gray-50 shadow p-6 rounded-lg space-y-4">
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a
                href="/documents/AICTE-Approval-Letter-2023.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                AICTE Approval Letter for Academic Year 2023-2024
              </a>
            </li>
            <li>
              <a
                href="/documents/AICTE-Approval-Letter-2022.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                AICTE Approval Letter for Academic Year 2022-2023
              </a>
            </li>
            <li>
              <a
                href="/documents/AICTE-Approval-Letter-2021.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                AICTE Approval Letter for Academic Year 2021-2022
              </a>
            </li>
            <li>
              <a
                href="/documents/AICTE-Approval-Letter-2020.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                AICTE Approval Letter for Academic Year 2020-2021
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 md:px-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Contact for AICTE Compliance</h3>
        <div className="bg-white shadow p-6 rounded-lg space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Contact Person:</h4>
            <p className="text-gray-600">Dr. Rajesh Sharma (Compliance Officer)</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Phone:</h4>
            <p className="text-gray-600">+91-98765-43210</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Email:</h4>
            <p className="text-gray-600">compliance@trident.ac.in</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
