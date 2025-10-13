import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Building2, Calendar, Users, DollarSign, 
  BookOpen, GraduationCap, Briefcase, Award, FlaskConical,
  FileText, CheckCircle, TrendingUp, Home
} from 'lucide-react';

const SubmissionDetail = () => {
  const { submissionId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('A');

  // Sample data - replace with actual API call based on submissionId
  const [submissionData] = useState({
    id: submissionId,
    year: '2024',
    status: 'Approved',
    submissionDate: '2024-03-15',
    score: 92.5,
    
    // Section A: General Information
    sectionA: {
      institutionName: 'ABC Engineering College',
      yearEstablished: '1995',
      address: '123 College Road, Engineering Campus',
      pincode: '641001',
      state: 'Tamil Nadu',
      website: 'www.abcengineering.edu',
      headName: 'Dr. Rajesh Kumar',
      instituteType: 'Private un-aided',
      instituteCategory: 'State University',
      affiliatedUniversity: 'Anna University',
      aicteApproval: 'F.No.South/1-2345678/2020/EOA',
      aicteDate: '2020-05-15',
      nbaAccredited: 'Yes',
      nbaValidityDate: '2026-12-31',
      naacAccredited: 'Yes',
      naacScore: 'A+',
      naacValidityDate: '2027-03-31',
      otherAccreditation: 'ISO 9001:2015',
      applicantName: 'Prof. Suresh Menon',
      applicantDesignation: 'Dean - Academics',
      applicantContact: '+91-9876543210',
      applicantEmail: 'dean@abcengineering.edu'
    },

    // Section B: Gender, Diversity and Finance
    sectionB: {
      genderInfo: [
        { year: '25-26', male: 450, female: 180, transgender: 2, total: 632 },
        { year: '24-25', male: 420, female: 165, transgender: 1, total: 586 },
        { year: '23-24', male: 400, female: 150, transgender: 0, total: 550 }
      ],
      diversityInfo: [
        { year: '25-26', interstate: 120, intrastate: 500, overseas: 12, total: 632 },
        { year: '24-25', interstate: 110, intrastate: 468, overseas: 8, total: 586 },
        { year: '23-24', interstate: 100, intrastate: 445, overseas: 5, total: 550 }
      ],
      examScores: [
        { slNo: 1, department: 'Computer Science', exam: 'JEE Main', highest: 98456, lowest: 156789 },
        { slNo: 2, department: 'Electronics', exam: 'JEE Main', highest: 105623, lowest: 178954 },
        { slNo: 3, department: 'Mechanical', exam: 'JEE Main', highest: 112456, lowest: 189456 },
        { slNo: 4, department: 'Civil', exam: 'JEE Main', highest: 125689, lowest: 198765 }
      ],
      avgTuitionFees: '₹85,000',
      otherFees: '₹15,000',
      hostelFees: '₹45,000',
      totalSalaryExpenses: '₹8,50,00,000',
      totalLabExpenses: '₹2,50,00,000',
      perStudentExpenditure: '₹1,85,000'
    },

    // Section C: Academics
    sectionC: {
      specialization: [
        { slNo: 1, department: 'Computer Science', intake2526: 180, filled2526: 175, percent2526: 97, intake2425: 180, filled2425: 170, percent2425: 94, intake2324: 180, filled2324: 165, percent2324: 92 },
        { slNo: 2, department: 'Electronics', intake2526: 120, filled2526: 115, percent2526: 96, intake2425: 120, filled2425: 112, percent2425: 93, intake2324: 120, filled2324: 110, percent2324: 92 },
        { slNo: 3, department: 'Mechanical', intake2526: 120, filled2526: 110, percent2526: 92, intake2425: 120, filled2425: 108, percent2425: 90, intake2324: 120, filled2324: 105, percent2324: 88 },
        { slNo: 4, department: 'Civil', intake2526: 60, filled2526: 55, percent2526: 92, intake2425: 60, filled2425: 52, percent2425: 87, intake2324: 60, filled2324: 50, percent2324: 83 }
      ],
      facultyDetails: [
        { slNo: 1, department: 'Computer Science', prof2526: 8, asp2526: 12, ap2526: 15, prof2425: 7, asp2425: 11, ap2425: 14, prof2324: 6, asp2324: 10, ap2324: 13 },
        { slNo: 2, department: 'Electronics', prof2526: 6, asp2526: 9, ap2526: 11, prof2425: 5, asp2425: 8, ap2425: 10, prof2324: 5, asp2324: 7, ap2324: 9 },
        { slNo: 3, department: 'Mechanical', prof2526: 5, asp2526: 8, ap2526: 10, prof2425: 4, asp2425: 7, ap2425: 9, prof2324: 4, asp2324: 6, ap2324: 8 },
        { slNo: 4, department: 'Civil', prof2526: 3, asp2526: 5, ap2526: 6, prof2425: 3, asp2425: 4, ap2425: 5, prof2324: 2, asp2324: 4, ap2324: 5 }
      ],
      phdHolders: [
        { year: '25-26', totalFaculty: 102, phdHolders: 78, percentage: 76 },
        { year: '24-25', totalFaculty: 95, phdHolders: 70, percentage: 74 },
        { year: '23-24', totalFaculty: 89, phdHolders: 65, percentage: 73 }
      ],
      avgTeachingExp: '12.5 years',
      creditsEarned: '180',
      contactHours: '2700',
      belowThreshold: '3',
      placement: [
        { slNo: 1, department: 'Computer Science', a2526: 140, b2526: 20, c2526: 5, t2526: 165, a2425: 135, b2425: 18, c2425: 4, t2425: 157, a2324: 130, b2324: 15, c2324: 3, t2324: 148 },
        { slNo: 2, department: 'Electronics', a2526: 85, b2526: 15, c2526: 3, t2526: 103, a2425: 80, b2425: 14, c2425: 2, t2425: 96, a2324: 75, b2324: 12, c2324: 2, t2324: 89 },
        { slNo: 3, department: 'Mechanical', a2526: 70, b2526: 12, c2526: 2, t2526: 84, a2425: 65, b2425: 10, c2425: 2, t2425: 77, a2324: 60, b2324: 8, c2324: 1, t2324: 69 },
        { slNo: 4, department: 'Civil', a2526: 35, b2526: 8, c2526: 1, t2526: 44, a2425: 32, b2425: 7, c2425: 1, t2425: 40, a2324: 30, b2324: 6, c2324: 1, t2324: 37 }
      ],
      salaryDetails: [
        { particulars: 'Highest salary', y2425: '₹28,00,000', y2324: '₹25,00,000', y2223: '₹22,00,000' },
        { particulars: 'Lowest salary', y2425: '₹3,50,000', y2324: '₹3,25,000', y2223: '₹3,00,000' },
        { particulars: 'Median salary', y2425: '₹6,50,000', y2324: '₹6,00,000', y2223: '₹5,50,000' },
        { particulars: 'Mean salary', y2425: '₹7,25,000', y2324: '₹6,75,000', y2223: '₹6,25,000' }
      ],
      activeMoUs: { y2425: 15, y2324: 12, y2223: 10, total: 37 },
      nepImplemented: 'Yes',
      multipleEntryExit: 'Yes',
      interCollegeCompetitions: 8,
      intraCollegeCompetitions: 24,
      clubsSocieties: 18,
      mentorMenteeRatio: '1:15',
      counsellorAvailable: 'Yes',
      wellbeingPrograms: 12,
      foreignMoU: 'Yes',
      foreignLanguageTraining: 'Yes'
    },

    // Section D: Infrastructure
    sectionD: {
      campusArea: '45 acres',
      builtUpArea: '8,50,000 sq.ft',
      classrooms: 85,
      laboratories: 42,
      facultyCabins: 65,
      conferenceHalls: 8,
      auditoriums: 2,
      studentComputerRatio: '1:8',
      stpPlant: 'Yes',
      stpCapacity: '50,000 liters/day',
      wasteMoU: 'Yes',
      nss: 'Yes',
      ncc: 'Yes',
      atm: 'Yes',
      wifi: 'Yes - 1 Gbps',
      iqac: 'Yes',
      iqacDate: '2010-08-15',
      centralLibrary: '12,000 sq.ft',
      volumes: '45,000',
      booksAddedThreeYears: '8,500',
      printedJournals: 125,
      onlineJournals: 2500,
      avgFacultyVisits: 450,
      avgStudentVisits: 1200,
      digitalLibrary: 'Yes',
      hostelBoys: { rooms: 120, capacity: 480, occupied: 445 },
      hostelGirls: { rooms: 80, capacity: 320, occupied: 295 },
      facultyQuarters: { total: 25, occupied: 22 },
      guestRooms: 8,
      commonRoomsBoys: 4,
      commonRoomsGirls: 3,
      medicalPractitioner: 'Yes',
      nursingAssistant: 'Yes',
      emergencyMedicines: 'Yes',
      solarPower: 'Yes',
      sustainableDevelopment: 'Yes',
      sports: [
        { name: 'Cricket Ground', area: '15,000 sq.ft' },
        { name: 'Volleyball Court', area: '2,000 sq.ft' },
        { name: 'Basketball Court', area: '2,500 sq.ft' }
      ]
    },

    // Section E: Research
    sectionE: {
      journals: [
        { type: 'SCI Indexed', y2425: 24, y2324: 20, y2223: 18 },
        { type: 'SCIE/WoS Indexed', y2425: 18, y2324: 15, y2223: 12 },
        { type: 'Scopus Indexed', y2425: 32, y2324: 28, y2223: 25 }
      ],
      conferences: [
        { type: 'Scopus Indexed', y2425: 45, y2324: 38, y2223: 32 }
      ],
      patents: [
        { type: 'Published', y2425: 28, y2324: 22, y2223: 18 },
        { type: 'Granted', y2425: 12, y2324: 9, y2223: 7 },
        { type: 'Percentage', y2425: 43, y2324: 41, y2223: 39 },
        { type: 'Commercialized', y2425: 3, y2324: 2, y2223: 1 }
      ],
      researchProjects: { y2425: '₹45,00,000', y2324: '₹38,00,000', y2223: '₹32,00,000', total: '₹1,15,00,000' },
      researchGrants: { y2425: '₹12,00,000', y2324: '₹10,00,000', y2223: '₹8,00,000', total: '₹30,00,000' },
      consultancy: { y2425: '₹22,00,000', y2324: '₹18,00,000', y2223: '₹15,00,000', total: '₹55,00,000' },
      seedMoney: { y2425: '₹8,00,000', y2324: '₹6,50,000', y2223: '₹5,00,000', total: '₹19,50,000' },
      incubationCentres: { y2425: 2, y2324: 2, y2223: 1, total: 2 }
    }
  });

  const sections = [
    { id: 'A', name: 'General Information', icon: Building2 },
    { id: 'B', name: 'Gender & Finance', icon: DollarSign },
    { id: 'C', name: 'Academics', icon: GraduationCap },
    { id: 'D', name: 'Infrastructure', icon: Home },
    { id: 'E', name: 'Research', icon: FlaskConical }
  ];

  const InfoCard = ({ label, value, icon: Icon }) => (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-200">
      <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold mb-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </div>
      <div className="text-gray-800 font-medium">{value || 'N/A'}</div>
    </div>
  );

  const Table = ({ headers, data }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gradient-to-r from-teal-600 to-cyan-600">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-3 py-2 text-left text-white font-semibold text-xs uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-teal-50">
              {Object.values(row).map((cell, cellIdx) => (
                <td key={cellIdx} className="px-3 py-2 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <button
          onClick={() => navigate('/submissions')}
          className="flex items-center gap-2 text-teal-700 hover:text-teal-900 font-semibold mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Submissions
        </button>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-teal-800 mb-2">
                {submissionData.sectionA.institutionName}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Year: <strong>{submissionData.year}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>Submitted: {new Date(submissionData.submissionDate).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold">
                <CheckCircle className="w-5 h-5" />
                {submissionData.status}
              </div>
              {submissionData.score && (
                <div className="flex items-center gap-2 text-2xl font-bold text-teal-700">
                  <TrendingUp className="w-6 h-6" />
                  {submissionData.score}%
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white rounded-2xl p-2 shadow-md border-2 border-teal-100 flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                  : 'text-teal-700 hover:bg-teal-50'
              }`}
            >
              <section.icon className="w-5 h-5" />
              Section {section.id}: {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100">
          {/* Section A: General Information */}
          {activeSection === 'A' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <Building2 className="w-7 h-7" />
                Section A: General Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard label="Institution Name" value={submissionData.sectionA.institutionName} />
                <InfoCard label="Year of Establishment" value={submissionData.sectionA.yearEstablished} icon={Calendar} />
                <InfoCard label="State" value={submissionData.sectionA.state} />
                <InfoCard label="Pin Code" value={submissionData.sectionA.pincode} />
                <InfoCard label="Website" value={submissionData.sectionA.website} />
                <InfoCard label="Head of Institution" value={submissionData.sectionA.headName} icon={Users} />
                <InfoCard label="Institute Type" value={submissionData.sectionA.instituteType} />
                <InfoCard label="Institute Category" value={submissionData.sectionA.instituteCategory} />
                <InfoCard label="Affiliated University" value={submissionData.sectionA.affiliatedUniversity} />
              </div>

              <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="font-bold text-teal-800 mb-3">Address</h3>
                <p className="text-gray-700">{submissionData.sectionA.address}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Accreditation Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>AICTE Approval:</strong> {submissionData.sectionA.aicteApproval}</p>
                    <p><strong>AICTE Date:</strong> {submissionData.sectionA.aicteDate}</p>
                    <p><strong>NBA Accredited:</strong> {submissionData.sectionA.nbaAccredited}</p>
                    <p><strong>NBA Valid Until:</strong> {submissionData.sectionA.nbaValidityDate}</p>
                    <p><strong>NAAC Score:</strong> {submissionData.sectionA.naacScore}</p>
                    <p><strong>NAAC Valid Until:</strong> {submissionData.sectionA.naacValidityDate}</p>
                    <p><strong>Other Accreditation:</strong> {submissionData.sectionA.otherAccreditation}</p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Applicant Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {submissionData.sectionA.applicantName}</p>
                    <p><strong>Designation:</strong> {submissionData.sectionA.applicantDesignation}</p>
                    <p><strong>Contact:</strong> {submissionData.sectionA.applicantContact}</p>
                    <p><strong>Email:</strong> {submissionData.sectionA.applicantEmail}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section B: Gender & Finance */}
          {activeSection === 'B' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-7 h-7" />
                Section B: Gender Information, Diversity & Finance
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                  <h3 className="font-bold text-purple-800 mb-3">Gender Information (Students Admitted)</h3>
                  <Table
                    headers={['Year', 'Male', 'Female', 'Transgender', 'Total']}
                    data={submissionData.sectionB.genderInfo.map(item => ({
                      year: item.year,
                      male: item.male,
                      female: item.female,
                      transgender: item.transgender,
                      total: item.total
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-indigo-800 mb-3">Diversity Information</h3>
                  <Table
                    headers={['Year', 'Inter-State', 'Intra-State', 'Overseas', 'Total']}
                    data={submissionData.sectionB.diversityInfo.map(item => ({
                      year: item.year,
                      interstate: item.interstate,
                      intrastate: item.intrastate,
                      overseas: item.overseas,
                      total: item.total
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-orange-800 mb-3">Exam Scores and Rank Details</h3>
                  <Table
                    headers={['Sl.No', 'Department', 'Exam', 'Highest Rank', 'Lowest Rank']}
                    data={submissionData.sectionB.examScores}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InfoCard label="Average Tuition Fees" value={submissionData.sectionB.avgTuitionFees} icon={DollarSign} />
                  <InfoCard label="Other Fees" value={submissionData.sectionB.otherFees} />
                  <InfoCard label="Hostel Fees" value={submissionData.sectionB.hostelFees} />
                  <InfoCard label="Total Salary Expenses" value={submissionData.sectionB.totalSalaryExpenses} />
                  <InfoCard label="Total Lab Expenses" value={submissionData.sectionB.totalLabExpenses} />
                  <InfoCard label="Per Student Expenditure" value={submissionData.sectionB.perStudentExpenditure} />
                </div>
              </div>
            </div>
          )}

          {/* Section C: Academics */}
          {activeSection === 'C' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-7 h-7" />
                Section C: Academics
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                  <h3 className="font-bold text-teal-800 mb-3">Specialization Details (Student Admissions)</h3>
                  <Table
                    headers={['Sl.No', 'Department', '25-26 Intake', '25-26 Filled', '25-26 %', '24-25 Intake', '24-25 Filled', '24-25 %', '23-24 Intake', '23-24 Filled', '23-24 %']}
                    data={submissionData.sectionC.specialization.map(item => ({
                      slNo: item.slNo,
                      department: item.department,
                      intake2526: item.intake2526,
                      filled2526: item.filled2526,
                      percent2526: `${item.percent2526}%`,
                      intake2425: item.intake2425,
                      filled2425: item.filled2425,
                      percent2425: `${item.percent2425}%`,
                      intake2324: item.intake2324,
                      filled2324: item.filled2324,
                      percent2324: `${item.percent2324}%`
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-indigo-800 mb-3">Faculty Details (Permanent Faculty)</h3>
                  <Table
                    headers={['Sl.No', 'Department', '25-26 Prof', '25-26 ASP', '25-26 AP', '24-25 Prof', '24-25 ASP', '24-25 AP', '23-24 Prof', '23-24 ASP', '23-24 AP']}
                    data={submissionData.sectionC.facultyDetails.map(item => ({
                      slNo: item.slNo,
                      department: item.department,
                      prof2526: item.prof2526,
                      asp2526: item.asp2526,
                      ap2526: item.ap2526,
                      prof2425: item.prof2425,
                      asp2425: item.asp2425,
                      ap2425: item.ap2425,
                      prof2324: item.prof2324,
                      asp2324: item.asp2324,
                      ap2324: item.ap2324
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">PhD Holders (Permanent Faculty)</h3>
                  <Table
                    headers={['Year', 'Total Faculty', 'PhD Holders', 'Percentage']}
                    data={submissionData.sectionC.phdHolders.map(item => ({
                      year: item.year,
                      total: item.totalFaculty,
                      phd: item.phdHolders,
                      percentage: `${item.percentage}%`
                    }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <InfoCard label="Avg Teaching Experience" value={submissionData.sectionC.avgTeachingExp} icon={BookOpen} />
                  <InfoCard label="Credits Earned" value={submissionData.sectionC.creditsEarned} />
                  <InfoCard label="Contact Hours" value={submissionData.sectionC.contactHours} />
                  <InfoCard label="Below Threshold (Feedback)" value={submissionData.sectionC.belowThreshold} />
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Placement, Higher Education & Entrepreneurship
                  </h3>
                  <Table
                    headers={['Sl.No', 'Department', '25-26 P', '25-26 HE', '25-26 E', '25-26 Total', '24-25 P', '24-25 HE', '24-25 E', '24-25 Total', '23-24 P', '23-24 HE', '23-24 E', '23-24 Total']}
                    data={submissionData.sectionC.placement.map(item => ({
                      slNo: item.slNo,
                      department: item.department,
                      a2526: item.a2526,
                      b2526: item.b2526,
                      c2526: item.c2526,
                      t2526: item.t2526,
                      a2425: item.a2425,
                      b2425: item.b2425,
                      c2425: item.c2425,
                      t2425: item.t2425,
                      a2324: item.a2324,
                      b2324: item.b2324,
                      c2324: item.c2324,
                      t2324: item.t2324
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-orange-800 mb-3">Placement Salary Details</h3>
                  <Table
                    headers={['Particulars', '24-25', '23-24', '22-23']}
                    data={submissionData.sectionC.salaryDetails.map(item => ({
                      particulars: item.particulars,
                      y2425: item.y2425,
                      y2324: item.y2324,
                      y2223: item.y2223
                    }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                    <h3 className="font-bold text-cyan-800 mb-3">Active MoUs</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>24-25:</strong> {submissionData.sectionC.activeMoUs.y2425}</p>
                      <p><strong>23-24:</strong> {submissionData.sectionC.activeMoUs.y2324}</p>
                      <p><strong>22-23:</strong> {submissionData.sectionC.activeMoUs.y2223}</p>
                      <p className="text-base font-bold text-cyan-900 mt-2">Total: {submissionData.sectionC.activeMoUs.total}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h3 className="font-bold text-indigo-800 mb-3">Additional Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>NEP 2020 Implemented:</strong> {submissionData.sectionC.nepImplemented}</p>
                      <p><strong>Multiple Entry/Exit:</strong> {submissionData.sectionC.multipleEntryExit}</p>
                      <p><strong>Inter-College Competitions:</strong> {submissionData.sectionC.interCollegeCompetitions}</p>
                      <p><strong>Intra-College Competitions:</strong> {submissionData.sectionC.intraCollegeCompetitions}</p>
                      <p><strong>Clubs/Societies:</strong> {submissionData.sectionC.clubsSocieties}</p>
                      <p><strong>Mentor-Mentee Ratio:</strong> {submissionData.sectionC.mentorMenteeRatio}</p>
                      <p><strong>Student Counsellor:</strong> {submissionData.sectionC.counsellorAvailable}</p>
                      <p><strong>Wellbeing Programs:</strong> {submissionData.sectionC.wellbeingPrograms}</p>
                      <p><strong>Foreign MoU:</strong> {submissionData.sectionC.foreignMoU}</p>
                      <p><strong>Foreign Language Training:</strong> {submissionData.sectionC.foreignLanguageTraining}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section D: Infrastructure */}
          {activeSection === 'D' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <Home className="w-7 h-7" />
                Section D: Infrastructure
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InfoCard label="Campus Area" value={submissionData.sectionD.campusArea} icon={Home} />
                  <InfoCard label="Built-up Area" value={submissionData.sectionD.builtUpArea} />
                  <InfoCard label="Classrooms" value={submissionData.sectionD.classrooms} />
                  <InfoCard label="Laboratories" value={submissionData.sectionD.laboratories} />
                  <InfoCard label="Faculty Cabins" value={submissionData.sectionD.facultyCabins} />
                  <InfoCard label="Conference Halls" value={submissionData.sectionD.conferenceHalls} />
                  <InfoCard label="Auditoriums" value={submissionData.sectionD.auditoriums} />
                  <InfoCard label="Student:Computer Ratio" value={submissionData.sectionD.studentComputerRatio} />
                  <InfoCard label="STP Plant" value={submissionData.sectionD.stpPlant} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Central Library
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Library Area:</strong> {submissionData.sectionD.centralLibrary}</p>
                      <p><strong>Total Volumes:</strong> {submissionData.sectionD.volumes}</p>
                      <p><strong>Books Added (3 years):</strong> {submissionData.sectionD.booksAddedThreeYears}</p>
                      <p><strong>Printed Journals:</strong> {submissionData.sectionD.printedJournals}</p>
                      <p><strong>Online Journals:</strong> {submissionData.sectionD.onlineJournals}</p>
                      <p><strong>Avg Faculty Visits/Month:</strong> {submissionData.sectionD.avgFacultyVisits}</p>
                      <p><strong>Avg Student Visits/Month:</strong> {submissionData.sectionD.avgStudentVisits}</p>
                      <p><strong>Digital Library:</strong> {submissionData.sectionD.digitalLibrary}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-800 mb-3">Hostel Facilities</h3>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="font-semibold text-green-800 mb-1">Boys Hostel</p>
                        <p><strong>Rooms:</strong> {submissionData.sectionD.hostelBoys.rooms}</p>
                        <p><strong>Capacity:</strong> {submissionData.sectionD.hostelBoys.capacity}</p>
                        <p><strong>Occupied:</strong> {submissionData.sectionD.hostelBoys.occupied}</p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="font-semibold text-green-800 mb-1">Girls Hostel</p>
                        <p><strong>Rooms:</strong> {submissionData.sectionD.hostelGirls.rooms}</p>
                        <p><strong>Capacity:</strong> {submissionData.sectionD.hostelGirls.capacity}</p>
                        <p><strong>Occupied:</strong> {submissionData.sectionD.hostelGirls.occupied}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InfoCard label="Faculty Quarters" value={`${submissionData.sectionD.facultyQuarters.occupied}/${submissionData.sectionD.facultyQuarters.total}`} />
                  <InfoCard label="Guest Rooms" value={submissionData.sectionD.guestRooms} />
                  <InfoCard label="Common Rooms (Boys)" value={submissionData.sectionD.commonRoomsBoys} />
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">Sports Facilities</h3>
                  <Table
                    headers={['Facility Name', 'Area (sq. ft)']}
                    data={submissionData.sectionD.sports.map(item => ({
                      name: item.name,
                      area: item.area
                    }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <InfoCard label="NSS Available" value={submissionData.sectionD.nss} />
                  <InfoCard label="NCC Available" value={submissionData.sectionD.ncc} />
                  <InfoCard label="ATM Available" value={submissionData.sectionD.atm} />
                  <InfoCard label="WiFi" value={submissionData.sectionD.wifi} />
                  <InfoCard label="IQAC" value={submissionData.sectionD.iqac} />
                  <InfoCard label="IQAC Established" value={submissionData.sectionD.iqacDate} icon={Calendar} />
                  <InfoCard label="Solar Power" value={submissionData.sectionD.solarPower} />
                  <InfoCard label="Sustainable Development" value={submissionData.sectionD.sustainableDevelopment} />
                </div>

                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-800 mb-3">Medical Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-white rounded border border-red-200">
                      <p className="font-semibold">Medical Practitioner</p>
                      <p className="text-gray-700">{submissionData.sectionD.medicalPractitioner}</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-red-200">
                      <p className="font-semibold">Nursing Assistant</p>
                      <p className="text-gray-700">{submissionData.sectionD.nursingAssistant}</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-red-200">
                      <p className="font-semibold">Emergency Medicines</p>
                      <p className="text-gray-700">{submissionData.sectionD.emergencyMedicines}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section E: Research */}
          {activeSection === 'E' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <FlaskConical className="w-7 h-7" />
                Section E: Research
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Journal Publications
                  </h3>
                  <Table
                    headers={['Journal Type', '24-25', '23-24', '22-23']}
                    data={submissionData.sectionE.journals.map(item => ({
                      type: item.type,
                      y2425: item.y2425,
                      y2324: item.y2324,
                      y2223: item.y2223
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3">Conference Publications & Book Chapters</h3>
                  <Table
                    headers={['Type', '24-25', '23-24', '22-23']}
                    data={submissionData.sectionE.conferences.map(item => ({
                      type: item.type,
                      y2425: item.y2425,
                      y2324: item.y2324,
                      y2223: item.y2223
                    }))}
                  />
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Patent Details
                  </h3>
                  <Table
                    headers={['Particulars', '24-25', '23-24', '22-23']}
                    data={submissionData.sectionE.patents.map(item => ({
                      type: item.type,
                      y2425: item.type.includes('Percentage') ? `${item.y2425}%` : item.y2425,
                      y2324: item.type.includes('Percentage') ? `${item.y2324}%` : item.y2324,
                      y2223: item.type.includes('Percentage') ? `${item.y2223}%` : item.y2223
                    }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Research Projects (Government)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>24-25:</strong> {submissionData.sectionE.researchProjects.y2425}</p>
                      <p><strong>23-24:</strong> {submissionData.sectionE.researchProjects.y2324}</p>
                      <p><strong>22-23:</strong> {submissionData.sectionE.researchProjects.y2223}</p>
                      <p className="text-base font-bold text-orange-900 mt-2 pt-2 border-t border-orange-300">
                        Total: {submissionData.sectionE.researchProjects.total}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                    <h3 className="font-bold text-cyan-800 mb-3">Research Grants (FDP/STTP)</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>24-25:</strong> {submissionData.sectionE.researchGrants.y2425}</p>
                      <p><strong>23-24:</strong> {submissionData.sectionE.researchGrants.y2324}</p>
                      <p><strong>22-23:</strong> {submissionData.sectionE.researchGrants.y2223}</p>
                      <p className="text-base font-bold text-cyan-900 mt-2 pt-2 border-t border-cyan-300">
                        Total: {submissionData.sectionE.researchGrants.total}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg border border-teal-200">
                    <h3 className="font-bold text-teal-800 mb-3">Consultancy Works</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>24-25:</strong> {submissionData.sectionE.consultancy.y2425}</p>
                      <p><strong>23-24:</strong> {submissionData.sectionE.consultancy.y2324}</p>
                      <p><strong>22-23:</strong> {submissionData.sectionE.consultancy.y2223}</p>
                      <p className="text-base font-bold text-teal-900 mt-2 pt-2 border-t border-teal-300">
                        Total: {submissionData.sectionE.consultancy.total}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg border border-pink-200">
                    <h3 className="font-bold text-pink-800 mb-3">Seed Money</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>24-25:</strong> {submissionData.sectionE.seedMoney.y2425}</p>
                      <p><strong>23-24:</strong> {submissionData.sectionE.seedMoney.y2324}</p>
                      <p><strong>22-23:</strong> {submissionData.sectionE.seedMoney.y2223}</p>
                      <p className="text-base font-bold text-pink-900 mt-2 pt-2 border-t border-pink-300">
                        Total: {submissionData.sectionE.seedMoney.total}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                  <h3 className="font-bold text-indigo-800 mb-3">Incubation Centres (MSME/DPIIT Registered)</h3>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">24-25</p>
                      <p className="text-2xl font-bold text-indigo-800">{submissionData.sectionE.incubationCentres.y2425}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">23-24</p>
                      <p className="text-2xl font-bold text-indigo-800">{submissionData.sectionE.incubationCentres.y2324}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">22-23</p>
                      <p className="text-2xl font-bold text-indigo-800">{submissionData.sectionE.incubationCentres.y2223}</p>
                    </div>
                    <div className="border-l-2 border-indigo-300">
                      <p className="text-sm text-gray-600 mb-1">Total Active</p>
                      <p className="text-2xl font-bold text-indigo-900">{submissionData.sectionE.incubationCentres.total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetail;