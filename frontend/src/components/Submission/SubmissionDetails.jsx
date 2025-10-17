import { ArrowLeft, Building2, Users, GraduationCap, Home, BookOpen,Download } from 'lucide-react';
import generateSubmissionPDF from '../../utils/generateSubmissionPDF';
const SubmissionDetailPage = () => {
  
  const submissionData = {
    id: 'ENG001',
    collegeName: 'IIT Madras',
    submittedAt: '2025-03-15 10:30 AM',
    isPaid: true,
    sectionA: {
      institutionName: 'Indian Institute of Technology Madras',
      yearEstablished: '1959',
      address: 'Sardar Patel Road, Chennai',
      pincode: '600036',
      state: 'Tamil Nadu',
      website: 'https://www.iitm.ac.in',
      headName: 'Prof. V. Kamakoti',
      instituteType: 'Government',
      instituteCategory: 'Central University',
      affiliatedUniversity: 'Autonomous',
      aicteApprovalNo: 'AICTE/2023/1234',
      aicteDate: '15-07-2023',
      nbaAccredited: 'Yes',
      nbaValidityDate: '31-12-2026',
      naacAccredited: 'Yes',
      naacScore: '3.85',
      naacValidityDate: '30-06-2027',
      otherAccreditation: 'ABET (Engineering Programs)',
      applicantName: 'Dr. Rajesh Kumar',
      applicantDesignation: 'Dean, Academic Affairs',
      applicantContact: '+91 44 2257 4801',
      applicantEmail: 'dean.academic@iitm.ac.in'
    },
    sectionB: {
      genderInfo: [
        { gender: 'Male', '25-26': 850, '24-25': 820, '23-24': 800 },
        { gender: 'Female', '25-26': 350, '24-25': 330, '23-24': 310 },
        { gender: 'Transgender', '25-26': 2, '24-25': 1, '23-24': 1 },
        { gender: 'Total', '25-26': 1202, '24-25': 1151, '23-24': 1111 }
      ],
      diversityInfo: [
        { category: 'Inter state', '25-26': 450, '24-25': 420, '23-24': 400 },
        { category: 'Intra-state', '25-26': 700, '24-25': 680, '23-24': 660 },
        { category: 'Overseas', '25-26': 52, '24-25': 51, '23-24': 51 },
        { category: 'Total', '25-26': 1202, '24-25': 1151, '23-24': 1111 }
      ],
      examScores: [
        { slNo: 1, department: 'Computer Science', examName: 'JEE Advanced', highestRank: 45, lowestRank: 1200 },
        { slNo: 2, department: 'Electrical Engineering', examName: 'JEE Advanced', highestRank: 52, lowestRank: 1450 },
        { slNo: 3, department: 'Mechanical Engineering', examName: 'JEE Advanced', highestRank: 68, lowestRank: 1800 }
      ],
      avgTuitionFees: '200000',
      otherFees: '50000',
      hostelFees: '80000',
      teachingSalaryExpense: '5000000000',
      labExpenses: '500000000',
      perStudentExpenditure: '350000'
    },
    sectionC: {
      specialization: [
        { slNo: 1, department: 'Computer Science', '25-26': { intake: 120, filled: 120, percentage: 100 }, '24-25': { intake: 120, filled: 118, percentage: 98.3 }, '23-24': { intake: 115, filled: 115, percentage: 100 } },
        { slNo: 2, department: 'Electrical Engineering', '25-26': { intake: 100, filled: 98, percentage: 98 }, '24-25': { intake: 100, filled: 97, percentage: 97 }, '23-24': { intake: 100, filled: 99, percentage: 99 } }
      ],
      facultyDetails: [
        { slNo: 1, department: 'Computer Science', intake: '120', '25-26': { prof: 25, asp: 30, ap: 20 }, '24-25': { prof: 24, asp: 28, ap: 22 }, '23-24': { prof: 23, asp: 27, ap: 23 } }
      ],
      phdHolders: [
        { year: '25-26', totalFaculty: 180, phdHolders: 168, percentage: 93.3 },
        { year: '24-25', totalFaculty: 175, phdHolders: 162, percentage: 92.6 },
        { year: '23-24', totalFaculty: 170, phdHolders: 158, percentage: 92.9 }
      ],
      avgTeachingExperience: '12.5 years',
      creditsEarned: '180',
      contactHours: '2700',
      belowThresholdFaculty: '2',
      placementData: [
        { slNo: 1, department: 'Computer Science', '25-26': { a: 110, b: 8, c: 2 }, '24-25': { a: 108, b: 7, c: 3 }, '23-24': { a: 107, b: 6, c: 2 } }
      ],
      placementSummary: [
        { slNo: 1, department: 'Computer Science', '25-26': { n: 120, x: 120 }, '24-25': { n: 120, x: 118 }, '23-24': { n: 115, x: 115 } }
      ],
      studentContactDetails: [
        { slNo: 1, nameAndDepartment: 'John Doe, Computer Science', email: 'john.doe@iitm.ac.in' },
        { slNo: 2, nameAndDepartment: 'Jane Smith, Electrical Engineering', email: 'jane.smith@iitm.ac.in' }
      ],
      salaryDetails: [
        { particular: 'Highest salary', '24-25': '5500000', '23-24': '5200000', '22-23': '4800000' },
        { particular: 'Lowest salary', '24-25': '800000', '23-24': '750000', '22-23': '700000' },
        { particular: 'Median salary', '24-25': '1800000', '23-24': '1700000', '22-23': '1600000' },
        { particular: 'Mean salary', '24-25': '2100000', '23-24': '2000000', '22-23': '1900000' }
      ],
      activeMoUs: { '24-25': 50, '23-24': 40, '22-23': 35 },
      nepImplementation: 'Yes',
      multipleEntryExit: 'Yes',
      interCollegeCompetitions: 25,
      intraCollegeCompetitions: 48,
      clubsSocieties: 42,
      mentorMenteeRatio: '1:8',
      studentCounsellor: 'Yes',
      programsConducted: '10 programs, link: https://iitm.ac.in/programs',
      hasForeignMoUs: true,
      foreignMoUs: [
        { slNo: 1, university: 'MIT', country: 'USA', validUpto: '2026-12-31', link: 'https://www.mit.edu/partners' },
        { slNo: 2, university: 'Oxford', country: 'UK', validUpto: '2027-06-30', link: 'https://www.ox.ac.uk/partners' }
      ],
      foreignLanguageTraining: 'Yes',
      foreignLanguageCertLink: 'https://iitm.ac.in/foreign-language-certification'
    },
    sectionD: {
      campusArea: '617',
      builtUpArea: '350000',
      classrooms: 125,
      laboratories: 85,
      facultyCabins: 180,
      conferenceHalls: 15,
      auditoriums: 5,
      studentComputerRatio: '1:3',
      stpPlant: 'Yes',
      stpOutcome: '2000 KL/day',
      wasteDisposalMoU: 'Yes',
      nss: 'Yes',
      ncc: 'Yes',
      cellsCommittees: ['Anti-Ragging', 'ICC', 'Grievance Redressal'],
      atm: 'Yes',
      wifi: 'Yes - 1 Gbps',
      iqac: 'Yes',
      iqacEstablished: '2005-06-15',
      centralLibrary: '50000',
      booksVolumes: '350000',
      booksAddedLastThreeYears: '25000',
      printedJournals: '250',
      onlineJournals: '15000',
      avgFacultyVisitsPerMonth: '4500',
      avgStudentVisitsPerMonth: '12000',
      digitalLibrary: 'Yes',
      departmentLibrary: [
        { department: 'Computer Science', volumes: 8500 },
        { department: 'Electrical Engineering', volumes: 7200 }
      ],
      hostelDetails: [
        { type: 'Boys', rooms: 450, capacity: 1800, occupied: 1750 },
        { type: 'Girls', rooms: 200, capacity: 800, occupied: 780 }
      ],
      facultyQuarters: { details:'detials',quarters: 120, occupied: 115 },
      guestRooms: 25,
      boysCommonRooms: 8,
      girlsCommonRooms: 6,
      medicalFacilities: { registeredPractitioner: 'Yes', nursingAssistant: 'Yes', emergencyMedicines: 'Yes' },
      solarPower: 'Yes',
      sustainableDevelopment: 'Yes',
      sportsFacilities: [
        { facility: 'Cricket Ground', area: '25000 sq.ft' },
        { facility: 'Volley Ball Court', area: '800 sq.ft' },
        { facility: 'Basketball Court', area: '600 sq.ft' }
      ]
    },
     sectionE: {
      journalPublications: [
        { type: 'SCI Indexed', '24-25': 245, '23-24': 230, '22-23': 215 },
        { type: 'SCIE/WoS Indexed', '24-25': 180, '23-24': 165, '22-23': 152 },
        { type: 'Scopus Indexed', '24-25': 320, '23-24': 298, '22-23': 275 }
      ],
      conferencePublications: [
        { id: 1, particular: 'Scopus Indexed', '24-25': 156, '23-24': 142, '22-23': 128 },
        { id: 2, particular: 'IEEE Conferences', '24-25': 50, '23-24': 45, '22-23': 40 }
      ],
      patents: [
        { particular: 'Patents Published', '24-25': 45, '23-24': 38, '22-23': 32 },
        { particular: 'Patents Granted', '24-25': 28, '23-24': 22, '22-23': 18 },
        { particular: 'Percentage', '24-25': '62.2', '23-24': '57.9', '22-23': '56.3' },
        { particular: 'Patents Commercialized', '24-25': 8, '23-24': 6, '22-23': 4 }
      ],
      researchProjects: [
        { id: 1, particular: 'AI Research', '24-25': 50000000, '23-24': 45000000, '22-23': 40000000 },
        { id: 2, particular: 'Robotics Project', '24-25': 35000000, '23-24': 33000000, '22-23': 32000000 }
      ],
      researchGrants: [
        { id: 1, particular: 'DST Grant', '24-25': 7000000, '23-24': 6500000, '22-23': 6000000 },
        { id: 2, particular: 'SERB Grant', '24-25': 5000000, '23-24': 4000000, '22-23': 3500000 }
      ],
      consultancyWorks: [
        { id: 1, particular: 'Industry Collaboration', '24-25': 20000000, '23-24': 18000000, '22-23': 16000000 },
        { id: 2, particular: 'Tech Consulting', '24-25': 15000000, '23-24': 14000000, '22-23': 12000000 }
      ],
      seedMoney: [
        { id: 1, particular: 'Startup Incubation', '24-25': 3000000, '23-24': 2500000, '22-23': 2000000 },
        { id: 2, particular: 'Faculty Research', '24-25': 2000000, '23-24': 2000000, '22-23': 2000000 }
      ],
      incubationCentres: [
        { particular: 'No. of Centres', '24-25': 3, '23-24': 3, '22-23': 2 },
        { particular: 'Overall Total', '24-25': 8, '23-24': '', '22-23': '' } // Total spans all years
      ]
    }
  };

  const Section = ({ title, icon, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      </div>
      {children}
    </div>
  );

  const DataRow = ({ label, value }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
      <div className="font-medium text-slate-700">{label}</div>
      <div className="md:col-span-2 text-slate-800 break-words">{value || 'N/A'}</div>
    </div>
  );

  const Table = ({ headers, data }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              {Object.values(row).map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-slate-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="min-h-screen bg-gray-50">
        <style>
          {`
            html, body {
              scroll-behavior: auto;
              overflow-y: auto;
            }
            .min-h-screen {
              min-height: 100vh;
              overflow: visible;
            }
          `}
        </style>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header with Back Button */}
         <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-teal-50 rounded-lg transition-colors border border-teal-200"
              aria-label="Back to ranking management"
            >
              <ArrowLeft className="w-5 h-5 text-teal-700" />
            </button>
            <span className="text-teal-700 text-sm font-medium">back to submissions</span>
          </div>

          {/* Main Header */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 shadow-sm mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{submissionData.collegeName}</h1>
                <p className="text-teal-50 text-sm">Submission ID: {submissionData.id} | Submitted: {submissionData.submittedAt}</p>
              </div>
              <button
                onClick={() => generateSubmissionPDF(submissionData)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-teal-700 rounded-lg font-medium text-sm hover:bg-teal-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>

          {/* Section A */}
          <Section title="Section A: General Information and Institute Details" icon={<Building2 className="w-6 h-6" />}>
            <DataRow label="Institution Name" value={submissionData.sectionA.institutionName} />
            <DataRow label="Year of Establishment" value={submissionData.sectionA.yearEstablished} />
            <DataRow label="Address" value={submissionData.sectionA.address} />
            <DataRow label="Pincode" value={submissionData.sectionA.pincode} />
            <DataRow label="State" value={submissionData.sectionA.state} />
            <DataRow label="Website" value={<a href={submissionData.sectionA.website} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">{submissionData.sectionA.website}</a>} />
            <DataRow label="Head of Institution" value={submissionData.sectionA.headName} />
            <DataRow label="Institute Type" value={submissionData.sectionA.instituteType} />
            <DataRow label="Institute Category" value={submissionData.sectionA.instituteCategory} />
            <DataRow label="Affiliated University" value={submissionData.sectionA.affiliatedUniversity} />
            <DataRow label="AICTE Approval" value={`${submissionData.sectionA.aicteApprovalNo} | Dated: ${submissionData.sectionA.aicteDate}`} />
            <DataRow label="NBA Accreditation" value={`${submissionData.sectionA.nbaAccredited} | Valid till: ${submissionData.sectionA.nbaValidityDate}`} />
            <DataRow label="NAAC Accreditation" value={`Score: ${submissionData.sectionA.naacScore} | Valid till: ${submissionData.sectionA.naacValidityDate}`} />
            <DataRow label="Other Accreditation" value={submissionData.sectionA.otherAccreditation} />
            <DataRow label="Applicant Name" value={submissionData.sectionA.applicantName} />
            <DataRow label="Applicant Designation" value={submissionData.sectionA.applicantDesignation} />
            <DataRow label="Contact Number" value={submissionData.sectionA.applicantContact} />
            <DataRow label="Email" value={submissionData.sectionA.applicantEmail} />
            
          </Section>

          {/* Section B */}
          <Section title="Section B: Gender Information, Diversity and Finance" icon={<Users className="w-6 h-6" />}>
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Gender Information (Students Admitted)</h3>
            <Table headers={['Gender', '25-26', '24-25', '23-24']} data={submissionData.sectionB.genderInfo} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Diversity Information</h3>
            <Table headers={['Category', '25-26', '24-25', '23-24']} data={submissionData.sectionB.diversityInfo} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Exam Scores and Rank Details</h3>
            <Table headers={['Sl.No', 'Department', 'Exam Name', 'Highest Rank', 'Lowest Rank']} data={submissionData.sectionB.examScores} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Financial Details (Last Academic Year)</h3>
            <DataRow label="Average Tuition Fees (per year)" value={`₹ ${submissionData.sectionB.avgTuitionFees}`} />
            <DataRow label="Other Fees (per year)" value={`₹ ${submissionData.sectionB.otherFees}`} />
            <DataRow label="Hostel Fees (per year)" value={`₹ ${submissionData.sectionB.hostelFees}`} />
            <DataRow label="Total Teaching Staff Expenses" value={`₹ ${submissionData.sectionB.teachingSalaryExpense}`} />
            <DataRow label="Total Lab Expenses" value={`₹ ${submissionData.sectionB.labExpenses}`} />
            <DataRow label="Per Student Expenditure" value={`₹ ${submissionData.sectionB.perStudentExpenditure}`} />
            
          </Section>

          {/* Section C */}
          <Section title="Section C: Academics" icon={<GraduationCap className="w-6 h-6" />}>
            {/* Specialization Details - Student Admission */}
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Specialization Details - Student Admission</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">Department</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">25-26</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">24-25</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">23-24</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs border-b"></th>
                    <th className="px-4 py-2 text-left text-xs border-b">Intake</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Filled</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Intake</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Filled</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Intake</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Filled</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.sectionC.specialization.map((row) => (
                    <tr key={row.slNo} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.department}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].filled}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].percentage.toFixed(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].filled}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].percentage.toFixed(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].filled}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].percentage.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Faculty Details */}
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Faculty Details</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">Department</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">Intake</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">25-26</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">24-25</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">23-24</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs border-b"></th>
                    <th className="px-4 py-2 text-left text-xs border-b"></th>
                    <th className="px-4 py-2 text-left text-xs border-b">Prof</th>
                    <th className="px-4 py-2 text-left text-xs border-b">ASP</th>
                    <th className="px-4 py-2 text-left text-xs border-b">AP</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Prof</th>
                    <th className="px-4 py-2 text-left text-xs border-b">ASP</th>
                    <th className="px-4 py-2 text-left text-xs border-b">AP</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Prof</th>
                    <th className="px-4 py-2 text-left text-xs border-b">ASP</th>
                    <th className="px-4 py-2 text-left text-xs border-b">AP</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.sectionC.facultyDetails.map((row) => (
                    <tr key={row.slNo} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.department}</td>
                      <td className="px-4 py-3 text-slate-700">{row.intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].prof}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].asp}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].ap}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].prof}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].asp}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].ap}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].prof}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].asp}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].ap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Faculty Totals and V Formula */}
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Faculty Totals and V Formula</h3>
            <Table
              headers={['Year', 'Total Professors', 'Total Associate Professors', 'Total Assistant Professors', 'V Formula']}
              data={[
                {
                  Year: '25-26',
                  'Total Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].prof), 0),
                  'Total Associate Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].asp), 0),
                  'Total Assistant Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].ap), 0),
                  'V Formula': ((3 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].prof), 0) +
                    2 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].asp), 0) +
                    submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['25-26'].ap), 0)) / 2.5).toFixed(2)
                },
                {
                  Year: '24-25',
                  'Total Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].prof), 0),
                  'Total Associate Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].asp), 0),
                  'Total Assistant Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].ap), 0),
                  'V Formula': ((3 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].prof), 0) +
                    2 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].asp), 0) +
                    submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['24-25'].ap), 0)) / 2.5).toFixed(2)
                },
                {
                  Year: '23-24',
                  'Total Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].prof), 0),
                  'Total Associate Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].asp), 0),
                  'Total Assistant Professors': submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].ap), 0),
                  'V Formula': ((3 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].prof), 0) +
                    2 * submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].asp), 0) +
                    submissionData.sectionC.facultyDetails.reduce((sum, row) => sum + Number(row['23-24'].ap), 0)) / 2.5).toFixed(2)
                }
              ]}
            />

            {/* PhD Holders */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">PhD Holders (Permanent Faculty)</h3>
            <Table
              headers={['Year', 'Total Faculty', 'PhD Holders', 'Percentage']}
              data={submissionData.sectionC.phdHolders.map(row => ({
                Year: row.year,
                'Total Faculty': row.totalFaculty,
                'PhD Holders': row.phdHolders,
                Percentage: row.percentage.toFixed(2)
              }))}
            />

            {/* Faculty Information */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Faculty Information</h3>
            <DataRow label="Average Teaching Experience" value={submissionData.sectionC.avgTeachingExperience} />
            <DataRow label="Credits Earned by Students" value={submissionData.sectionC.creditsEarned} />
            <DataRow label="Contact Hours" value={submissionData.sectionC.contactHours} />
            <DataRow label="Faculty Below Feedback Threshold" value={submissionData.sectionC.belowThresholdFaculty} />

            {/* Placement, Higher Education, and Entrepreneurship */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Placement(A), Higher Education(B), and Entrepreneurship(C)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">Department</th>
                    <th colSpan="4" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">25-26</th>
                    <th colSpan="4" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">24-25</th>
                    <th colSpan="4" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">23-24</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs border-b"></th>
                    <th className="px-4 py-2 text-left text-xs border-b">A</th>
                    <th className="px-4 py-2 text-left text-xs border-b">B</th>
                    <th className="px-4 py-2 text-left text-xs border-b">C</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Total</th>
                    <th className="px-4 py-2 text-left text-xs border-b">A</th>
                    <th className="px-4 py-2 text-left text-xs border-b">B</th>
                    <th className="px-4 py-2 text-left text-xs border-b">C</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Total</th>
                    <th className="px-4 py-2 text-left text-xs border-b">A</th>
                    <th className="px-4 py-2 text-left text-xs border-b">B</th>
                    <th className="px-4 py-2 text-left text-xs border-b">C</th>
                    <th className="px-4 py-2 text-left text-xs border-b">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.sectionC.placementData.map((row) => (
                    <tr key={row.slNo} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.department}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].a}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].b}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].c}</td>
                      <td className="px-4 py-3 text-slate-700">{Number(row['25-26'].a) + Number(row['25-26'].b) + Number(row['25-26'].c)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].a}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].b}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].c}</td>
                      <td className="px-4 py-3 text-slate-700">{Number(row['24-25'].a) + Number(row['24-25'].b) + Number(row['24-25'].c)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].a}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].b}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].c}</td>
                      <td className="px-4 py-3 text-slate-700">{Number(row['23-24'].a) + Number(row['23-24'].b) + Number(row['23-24'].c)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Placement Summary */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Placement Summary</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b text-xs">Department</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">25-26</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">24-25</th>
                    <th colSpan="3" className="px-4 py-3 text-center font-semibold text-slate-700 border-b text-xs">23-24</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs border-b"></th>
                    <th className="px-4 py-2 text-left text-xs border-b">N</th>
                    <th className="px-4 py-2 text-left text-xs border-b">X</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                    <th className="px-4 py-2 text-left text-xs border-b">N</th>
                    <th className="px-4 py-2 text-left text-xs border-b">X</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                    <th className="px-4 py-2 text-left text-xs border-b">N</th>
                    <th className="px-4 py-2 text-left text-xs border-b">X</th>
                    <th className="px-4 py-2 text-left text-xs border-b">%</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionData.sectionC.placementSummary.map((row) => (
                    <tr key={row.slNo} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.department}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].n}</td>
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].x}</td>
                      <td className="px-4 py-3 text-slate-700">{((Number(row['25-26'].x) / Number(row['25-26'].n)) * 100).toFixed(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].n}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].x}</td>
                      <td className="px-4 py-3 text-slate-700">{((Number(row['24-25'].x) / Number(row['24-25'].n)) * 100).toFixed(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].n}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].x}</td>
                      <td className="px-4 py-3 text-slate-700">{((Number(row['23-24'].x) / Number(row['23-24'].n)) * 100).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Student Contact Details */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Student Contact Details (Last Passed Out Batch)</h3>
            <Table
              headers={['Sl.No', 'Name and Department', 'E-Mail Id']}
              data={submissionData.sectionC.studentContactDetails.map(row => ({
                'Sl.No': row.slNo,
                'Name and Department': row.nameAndDepartment,
                'E-Mail Id': row.email
              }))}
            />

            {/* Placement Salary Details */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Placement Salary Details</h3>
            <Table
              headers={['Particular', '24-25', '23-24', '22-23']}
              data={submissionData.sectionC.salaryDetails.map(row => ({
                Particular: row.particular,
                '24-25': `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
                '23-24': `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
                '22-23': `₹${Number(row['22-23']).toLocaleString('en-IN')}`
              }))}
            />

            {/* Active MoUs */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Active MoUs</h3>
            <Table
              headers={['Year', 'No. of Active MoUs']}
              data={[
                { Year: '24-25', 'No. of Active MoUs': submissionData.sectionC.activeMoUs['24-25'] || 0 },
                { Year: '23-24', 'No. of Active MoUs': submissionData.sectionC.activeMoUs['23-24'] || 0 },
                { Year: '22-23', 'No. of Active MoUs': submissionData.sectionC.activeMoUs['22-23'] || 0 },
                {
                  Year: 'Total',
                  'No. of Active MoUs': Object.values(submissionData.sectionC.activeMoUs).reduce((sum, val) => sum + Number(val), 0)
                }
              ]}
            />

            {/* Other Academic Details */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Other Academic Details</h3>
            <DataRow label="NEP 2020 Implementation" value={submissionData.sectionC.nepImplementation} />
            <DataRow label="Multiple Entry & Exit Scheme" value={submissionData.sectionC.multipleEntryExit} />
            <DataRow label="Inter College Competitions (Last AY)" value={submissionData.sectionC.interCollegeCompetitions} />
            <DataRow label="Intra College Competitions (Last AY)" value={submissionData.sectionC.intraCollegeCompetitions} />
            <DataRow label="Clubs and Societies" value={submissionData.sectionC.clubsSocieties} />
            <DataRow label="Mentor-Mentee Ratio" value={submissionData.sectionC.mentorMenteeRatio} />
            <DataRow label="Student Counsellor Available" value={submissionData.sectionC.studentCounsellor} />
            <DataRow label="Programs Conducted (Yoga, etc.)" value={submissionData.sectionC.programsConducted} />

            {/* MoUs with Foreign Universities */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">MoUs with Foreign Universities</h3>
            <DataRow
              label="MoUs with Foreign Universities"
              value={submissionData.sectionC.hasForeignMoUs ? 'Yes' : 'No'}
            />
            {submissionData.sectionC.hasForeignMoUs && submissionData.sectionC.foreignMoUs?.length > 0 && (
              <Table
                headers={['Sl.No', 'University', 'Country', 'Valid Upto', 'Link']}
                data={submissionData.sectionC.foreignMoUs.map(row => ({
                  'Sl.No': row.slNo,
                  University: row.university,
                  Country: row.country,
                  'Valid Upto': row.validUpto,
                  Link: <a href={row.link} className="text-blue-600 hover:underline">Collaboration Details</a>
                }))}
              />
            )}

            {/* Foreign Language Training */}
            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Foreign Language Training</h3>
            <DataRow label="Foreign Language Training" value={submissionData.sectionC.foreignLanguageTraining} />
            <DataRow
              label="Certificate Details"
              value={<a href={submissionData.sectionC.foreignLanguageCertLink} className="text-blue-600 hover:underline">View Certification Details</a>}
            />

           
          </Section>

          {/* Section D */}
          <Section title="Section D: Infrastructure" icon={<Home className="w-6 h-6" />}>
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Campus Infrastructure</h3>
            <DataRow label="Campus Area (sq.ft)" value={submissionData.sectionD.campusArea} />
            <DataRow label="Total Built-up Area (sq.ft)" value={submissionData.sectionD.builtUpArea} />
            <DataRow label="Number of Classrooms" value={submissionData.sectionD.classrooms} />
            <DataRow label="Number of Laboratories" value={submissionData.sectionD.laboratories} />
            <DataRow label="Faculty Cabins" value={submissionData.sectionD.facultyCabins} />
            <DataRow label="Conference/Discussion Halls" value={submissionData.sectionD.conferenceHalls} />
            <DataRow label="Auditoriums" value={submissionData.sectionD.auditoriums} />
            <DataRow label="Student Computer Ratio" value={submissionData.sectionD.studentComputerRatio} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Facilities</h3>
            <DataRow label="STP Plant" value={`${submissionData.sectionD.stpPlant} | Output: ${submissionData.sectionD.stpOutcome}`} />
            <DataRow label="Waste Disposal MoU" value={submissionData.sectionD.wasteDisposalMoU} />
            <DataRow label="NSS Available" value={submissionData.sectionD.nss} />
            <DataRow label="NCC Available" value={submissionData.sectionD.ncc} />
            <DataRow label="Cells/Committees Available" value={submissionData.sectionD.cellsCommittees?.length > 0 ? submissionData.sectionD.cellsCommittees.join(', ') : 'None'} />
            <DataRow label="ATM on Campus" value={submissionData.sectionD.atm} />
            <DataRow label="Wi-Fi Connectivity" value={submissionData.sectionD.wifi} />
            <DataRow label="IQAC Established" value={`${submissionData.sectionD.iqac} | Date: ${submissionData.sectionD.iqacEstablished}`} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Library Resources</h3>
            <DataRow label="Central Library Area (sq.ft)" value={submissionData.sectionD.centralLibrary} />
            <DataRow label="Total Book Volumes" value={submissionData.sectionD.booksVolumes} />
            <DataRow label="Books Added (Last 3 Years)" value={submissionData.sectionD.booksAddedLastThreeYears} />
            <DataRow label="Printed Journals" value={submissionData.sectionD.printedJournals} />
            <DataRow label="Online Journals" value={submissionData.sectionD.onlineJournals} />
            <DataRow label="Average Faculty Library Visits/Month" value={submissionData.sectionD.avgFacultyVisitsPerMonth} />
            <DataRow label="Average Student Library Visits/Month" value={submissionData.sectionD.avgStudentVisitsPerMonth} />
            <DataRow label="Digital Library" value={submissionData.sectionD.digitalLibrary} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Department Libraries</h3>
            <DataRow
              label="Department Libraries Available"
              value={submissionData.sectionD.departmentLibrary?.length > 0 ? 'Yes' : 'No'}
            />
            {submissionData.sectionD.departmentLibrary?.length > 0 ? (
              <Table headers={['Department', 'Volumes']} data={submissionData.sectionD.departmentLibrary} />
            ) : (
              <p className="text-slate-600 text-sm">No department libraries available</p>
            )}

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Hostel Details</h3>
            <DataRow
              label="Hostel Available"
              value={submissionData.sectionD.hostelDetails?.length > 0 ? 'Yes' : 'No'}
            />
            {submissionData.sectionD.hostelDetails?.length > 0 ? (
              <Table headers={['Type', 'Rooms', 'Capacity', 'Occupied']} data={submissionData.sectionD.hostelDetails} />
            ) : (
              <p className="text-slate-600 text-sm">No hostel facilities available</p>
            )}

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Faculty Quarters</h3>
            <DataRow label="Quarters Details" value={submissionData.sectionD.facultyQuarters.details} />
            <DataRow label="Total Quarters" value={submissionData.sectionD.facultyQuarters.quarters} />
            <DataRow label="Occupied Quarters" value={submissionData.sectionD.facultyQuarters.occupied} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Common Facilities</h3>
            <DataRow label="Guest Rooms" value={submissionData.sectionD.guestRooms} />
            <DataRow label="Boys Common Rooms" value={submissionData.sectionD.boysCommonRooms} />
            <DataRow label="Girls Common Rooms" value={submissionData.sectionD.girlsCommonRooms} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Medical Facilities</h3>
            <DataRow label="Registered Medical Practitioner" value={submissionData.sectionD.medicalFacilities.registeredPractitioner} />
            <DataRow label="Nursing Assistant" value={submissionData.sectionD.medicalFacilities.nursingAssistant} />
            <DataRow label="Emergency Medicines" value={submissionData.sectionD.medicalFacilities.emergencyMedicines} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Sustainability Initiatives</h3>
            <DataRow label="Solar Power Initiatives" value={submissionData.sectionD.solarPower} />
            <DataRow label="Sustainable Development" value={submissionData.sectionD.sustainableDevelopment} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Sports Facilities</h3>
            <DataRow
              label="Sports Facilities Available"
              value={submissionData.sectionD.sportsFacilities?.length > 0 ? 'Yes' : 'No'}
            />
            {submissionData.sectionD.sportsFacilities?.length > 0 ? (
              <Table headers={['Facility', 'Area']} data={submissionData.sectionD.sportsFacilities} />
            ) : (
              <p className="text-slate-600 text-sm">No sports facilities available</p>
            )}

           
          </Section>


          {/* Section E */}
        <Section title="Section E: Research" icon={<BookOpen className="w-6 h-6" />}>
          <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Journal Publications</h3>
          <Table
            headers={['Publication Type', '24-25', '23-24', '22-23']}
            data={submissionData.sectionE.journalPublications.map(row => ({
              'Publication Type': row.type,
              '24-25': row['24-25'],
              '23-24': row['23-24'],
              '22-23': row['22-23']
            }))}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Conference/Book Chapters Publications</h3>
          <Table
            headers={['Sl.No', 'Particular', '24-25', '23-24', '22-23']}
            data={submissionData.sectionE.conferencePublications.map(row => ({
              'Sl.No': row.id,
              Particular: row.particular,
              '24-25': row['24-25'],
              '23-24': row['23-24'],
              '22-23': row['22-23']
            }))}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Patents Details</h3>
          <Table
            headers={['Particular', '24-25', '23-24', '22-23']}
            data={submissionData.sectionE.patents.map(row => ({
              Particular: row.particular,
              '24-25': row.particular === 'Percentage' ? `${row['24-25']}%` : row['24-25'],
              '23-24': row.particular === 'Percentage' ? `${row['23-24']}%` : row['23-24'],
              '22-23': row.particular === 'Percentage' ? `${row['22-23']}%` : row['22-23']
            }))}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Research Projects (Government)</h3>
          <Table
            headers={['Sl.No', 'Particular', '24-25 (₹)', '23-24 (₹)', '22-23 (₹)']}
            data={[
              ...submissionData.sectionE.researchProjects.map(row => ({
                'Sl.No': row.id,
                Particular: row.particular,
                '24-25 (₹)': `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${Number(row['22-23']).toLocaleString('en-IN')}`
              })),
              {
                'Sl.No': 'Total',
                Particular: '',
                '24-25 (₹)': `₹${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['24-25']), 0).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['23-24']), 0).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['22-23']), 0).toLocaleString('en-IN')}`
              }
            ]}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Research Grants (Government)</h3>
          <Table
            headers={['Sl.No', 'Particular', '24-25 (₹)', '23-24 (₹)', '22-23 (₹)']}
            data={[
              ...submissionData.sectionE.researchGrants.map(row => ({
                'Sl.No': row.id,
                Particular: row.particular,
                '24-25 (₹)': `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${Number(row['22-23']).toLocaleString('en-IN')}`
              })),
              {
                'Sl.No': 'Total',
                Particular: '',
                '24-25 (₹)': `₹${submissionData.sectionE.researchGrants.reduce((sum, row) => sum + Number(row['24-25']), 0).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${submissionData.sectionE.researchGrants.reduce((sum, row) => sum + Number(row['23-24']), 0).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${submissionData.sectionE.researchGrants.reduce((sum, row) => sum + Number(row['22-23']), 0).toLocaleString('en-IN')}`
              }
            ]}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Consultancy Works</h3>
          <Table
            headers={['Sl.No', 'Particular', '24-25 (₹)', '23-24 (₹)', '22-23 (₹)']}
            data={[
              ...submissionData.sectionE.consultancyWorks.map(row => ({
                'Sl.No': row.id,
                Particular: row.particular,
                '24-25 (₹)': `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${Number(row['22-23']).toLocaleString('en-IN')}`
              })),
              {
                'Sl.No': 'Total',
                Particular: '',
                '24-25 (₹)': `₹${submissionData.sectionE.consultancyWorks.reduce((sum, row) => sum + Number(row['24-25']), 0).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${submissionData.sectionE.consultancyWorks.reduce((sum, row) => sum + Number(row['23-24']), 0).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${submissionData.sectionE.consultancyWorks.reduce((sum, row) => sum + Number(row['22-23']), 0).toLocaleString('en-IN')}`
              }
            ]}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Seed Money</h3>
          <Table
            headers={['Sl.No', 'Particular', '24-25 (₹)', '23-24 (₹)', '22-23 (₹)']}
            data={[
              ...submissionData.sectionE.seedMoney.map(row => ({
                'Sl.No': row.id,
                Particular: row.particular,
                '24-25 (₹)': `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${Number(row['22-23']).toLocaleString('en-IN')}`
              })),
              {
                'Sl.No': 'Total',
                Particular: '',
                '24-25 (₹)': `₹${submissionData.sectionE.seedMoney.reduce((sum, row) => sum + Number(row['24-25']), 0).toLocaleString('en-IN')}`,
                '23-24 (₹)': `₹${submissionData.sectionE.seedMoney.reduce((sum, row) => sum + Number(row['23-24']), 0).toLocaleString('en-IN')}`,
                '22-23 (₹)': `₹${submissionData.sectionE.seedMoney.reduce((sum, row) => sum + Number(row['22-23']), 0).toLocaleString('en-IN')}`
              }
            ]}
          />

          <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Incubation Centres</h3>
          <Table
            headers={['Particular', '24-25', '23-24', '22-23']}
            data={submissionData.sectionE.incubationCentres.map(row => ({
              Particular: row.particular,
              '24-25': row['24-25'],
              '23-24': row['23-24'],
              '22-23': row['22-23']
            }))}
          />

          
        </Section>
        </div>
      </div>
    </form>
  );
};

export default SubmissionDetailPage;