import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Building2, Users, GraduationCap, Home, BookOpen, CheckCircle, XCircle } from 'lucide-react';

const SubmissionDetailPage = () => {
  const [scores, setScores] = useState({
    sectionA: '',
    sectionB: '',
    sectionC: '',
    sectionD: '',
    sectionE: ''
  });
  const [reviewStatus, setReviewStatus] = useState('pending');
  const [comments, setComments] = useState('');
  const scrollRef = useRef(window.scrollY);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      console.log('Scroll position updated:', scrollRef.current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restore scroll position after any state update
  useEffect(() => {
    console.log('Restoring scroll to:', scrollRef.current);
    window.scrollTo({ top: scrollRef.current, behavior: 'auto' });
  }, [scores]);

  const handleScoreChange = (section, value) => {
    const scrollPosition = window.scrollY;
    console.log('Before score update, scroll position:', scrollPosition);
    setScores((prev) => {
      const newScores = { ...prev, [section]: value };
      console.log('After score update, scroll position:', window.scrollY);
      return newScores;
    });
    // Ensure scroll position is restored immediately
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'auto' });
    }, 0);
  };

  const handleSubmitReview = (status) => {
    if (!Object.values(scores).every((s) => s !== '')) {
      alert('Please fill all section scores before submitting');
      return;
    }
    const totalScore = Object.values(scores).reduce((sum, score) => sum + (parseFloat(score) || 0), 0);
    setReviewStatus(status);
    alert(`Submission ${status === 'accepted' ? 'Accepted' : 'Rejected'}\nOverall Score: ${totalScore.toFixed(2)}/100`);
  };

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
        { slNo: 1, department: 'Computer Science', '25-26': { prof: 25, asp: 30, ap: 20 }, '24-25': { prof: 24, asp: 28, ap: 22 }, '23-24': { prof: 23, asp: 27, ap: 23 } }
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
      salaryDetails: [
        { particular: 'Highest salary', '24-25': '5500000', '23-24': '5200000', '22-23': '4800000' },
        { particular: 'Lowest salary', '24-25': '800000', '23-24': '750000', '22-23': '700000' },
        { particular: 'Median salary', '24-25': '1800000', '23-24': '1700000', '22-23': '1600000' },
        { particular: 'Mean salary', '24-25': '2100000', '23-24': '2000000', '22-23': '1900000' }
      ],
      activeMoUs: 125,
      nepImplementation: 'Yes',
      multipleEntryExit: 'Yes',
      interCollegeCompetitions: 25,
      intraCollegeCompetitions: 48,
      clubsSocieties: 42,
      mentorMenteeRatio: '1:8',
      studentCounsellor: 'Yes',
      foreignLanguageTraining: 'Yes'
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
      facultyQuarters: { quarters: 120, occupied: 115 },
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
        { type: 'Scopus Indexed', '24-25': 156, '23-24': 142, '22-23': 128 }
      ],
      patents: [
        { particular: 'Patents Published', '24-25': 45, '23-24': 38, '22-23': 32 },
        { particular: 'Patents Granted', '24-25': 28, '23-24': 22, '22-23': 18 },
        { particular: 'Patents Commercialized', '24-25': 8, '23-24': 6, '22-23': 4 }
      ],
      researchProjects: { '24-25': 85000000, '23-24': 78000000, '22-23': 72000000 },
      researchGrants: { '24-25': 12000000, '23-24': 10500000, '22-23': 9500000 },
      consultancyWorks: { '24-25': 35000000, '23-24': 32000000, '22-23': 28000000 },
      seedMoney: { '24-25': 5000000, '23-24': 4500000, '22-23': 4000000 },
      incubationCentres: { '24-25': 3, '23-24': 3, '22-23': 2 }
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

  const ScoreInput = ({ section, maxScore = 20 }) => {
    const [tempScore, setTempScore] = useState('');
    const currentScore = scores[section];

    const handleSubmit = () => {
      if (tempScore === '' || isNaN(tempScore) || tempScore < 0 || tempScore > maxScore) {
        alert(`Please enter a valid score between 0 and ${maxScore}`);
        return;
      }
      handleScoreChange(section, tempScore);
    };

    return (
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          {section.replace(/([A-Z])/g, ' $1').trim()} Score (out of {maxScore})
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min="0"
            max={maxScore}
            value={tempScore}
            onChange={(e) => {
              console.log('Before tempScore update, scroll position:', window.scrollY);
              setTempScore(e.target.value);
              console.log('After tempScore update, scroll position:', window.scrollY);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
            onWheel={(e) => e.preventDefault()}
            className="w-full md:w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
            placeholder="0"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            aria-label={`Submit score for ${section}`}
          >
            Submit Score
          </button>
          <button
            onClick={() => setTempScore('')}
            className="px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
            aria-label={`Clear score for ${section}`}
          >
            Clear
          </button>
        </div>
        {currentScore && (
          <p className="mt-2 text-sm text-slate-600">Current Score: {currentScore}/{maxScore}</p>
        )}
      </div>
    );
  };

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
              className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
              aria-label="Back to ranking management"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <span className="text-slate-500 text-sm font-medium">back to ranking management ('/ranking-management')</span>
          </div>

          {/* Main Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{submissionData.collegeName}</h1>
              <p className="text-slate-600 text-sm">Submission ID: {submissionData.id} | Submitted: {submissionData.submittedAt}</p>
            </div>
            <div>
              {submissionData.isPaid ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-slate-700 rounded-lg font-medium text-sm border border-gray-200">
                  <CheckCircle className="w-4 h-4" />
                  Fee Paid
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-slate-700 rounded-lg font-medium text-sm border border-gray-200">
                  <XCircle className="w-4 h-4" />
                  Pending Payment
                </span>
              )}
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
            <ScoreInput section="sectionA" />
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
            <ScoreInput section="sectionB" />
          </Section>

          {/* Section C */}
          <Section title="Section C: Academics" icon={<GraduationCap className="w-6 h-6" />}>
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
                      <td className="px-4 py-3 text-slate-700">{row['25-26'].percentage}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].filled}</td>
                      <td className="px-4 py-3 text-slate-700">{row['24-25'].percentage}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].intake}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].filled}</td>
                      <td className="px-4 py-3 text-slate-700">{row['23-24'].percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">PhD Holders (Permanent Faculty)</h3>
            <Table headers={['Year', 'Total Faculty', 'PhD Holders', 'Percentage']} data={submissionData.sectionC.phdHolders} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Faculty Information</h3>
            <DataRow label="Average Teaching Experience" value={submissionData.sectionC.avgTeachingExperience} />
            <DataRow label="Credits Earned by Students" value={submissionData.sectionC.creditsEarned} />
            <DataRow label="Contact Hours" value={submissionData.sectionC.contactHours} />
            <DataRow label="Faculty Below Feedback Threshold" value={submissionData.sectionC.belowThresholdFaculty} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Placement Salary Details</h3>
            <Table headers={['Particular', '24-25', '23-24', '22-23']} data={submissionData.sectionC.salaryDetails} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Other Academic Details</h3>
            <DataRow label="Active MoUs" value={submissionData.sectionC.activeMoUs} />
            <DataRow label="NEP 2020 Implementation" value={submissionData.sectionC.nepImplementation} />
            <DataRow label="Multiple Entry & Exit Scheme" value={submissionData.sectionC.multipleEntryExit} />
            <DataRow label="Inter College Competitions (Last AY)" value={submissionData.sectionC.interCollegeCompetitions} />
            <DataRow label="Intra College Competitions (Last AY)" value={submissionData.sectionC.intraCollegeCompetitions} />
            <DataRow label="Clubs and Societies" value={submissionData.sectionC.clubsSocieties} />
            <DataRow label="Mentor-Mentee Ratio" value={submissionData.sectionC.mentorMenteeRatio} />
            <DataRow label="Student Counsellor Available" value={submissionData.sectionC.studentCounsellor} />
            <DataRow label="Foreign Language Training" value={submissionData.sectionC.foreignLanguageTraining} />
            <ScoreInput section="sectionC" />
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
            <Table headers={['Department', 'Volumes']} data={submissionData.sectionD.departmentLibrary} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Hostel Details</h3>
            <Table headers={['Type', 'Rooms', 'Capacity', 'Occupied']} data={submissionData.sectionD.hostelDetails} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Faculty Quarters</h3>
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
            <Table headers={['Facility', 'Area']} data={submissionData.sectionD.sportsFacilities} />

            <ScoreInput section="sectionD" />
          </Section>

          {/* Section E */}
          <Section title="Section E: Research" icon={<BookOpen className="w-6 h-6" />}>
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Journal Publications</h3>
            <Table headers={['Publication Type', '24-25', '23-24', '22-23']} data={submissionData.sectionE.journalPublications} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Conference Publications</h3>
            <Table headers={['Publication Type', '24-25', '23-24', '22-23']} data={submissionData.sectionE.conferencePublications} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Patents Details</h3>
            <Table headers={['Particular', '24-25', '23-24', '22-23']} data={submissionData.sectionE.patents} />

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Research Funding</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Research Projects (Govt)</p>
                <p className="text-lg font-semibold text-slate-800">₹ {(submissionData.sectionE.researchProjects['24-25'] / 10000000).toFixed(1)}Cr</p>
                <p className="text-xs text-slate-500 mt-1">24-25</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Research Grants</p>
                <p className="text-lg font-semibold text-slate-800">₹ {(submissionData.sectionE.researchGrants['24-25'] / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-slate-500 mt-1">24-25</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Consultancy Works</p>
                <p className="text-lg font-semibold text-slate-800">₹ {(submissionData.sectionE.consultancyWorks['24-25'] / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-slate-500 mt-1">24-25</p>
              </div>
            </div>

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Research Funding Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Research Projects (Govt)</p>
                <div className="space-y-1 text-sm text-slate-700">
                  <div className="flex justify-between"><span>24-25:</span><span className="font-medium">₹ {(submissionData.sectionE.researchProjects['24-25'] / 10000000).toFixed(1)}Cr</span></div>
                  <div className="flex justify-between"><span>23-24:</span><span className="font-medium">₹ {(submissionData.sectionE.researchProjects['23-24'] / 10000000).toFixed(1)}Cr</span></div>
                  <div className="flex justify-between"><span>22-23:</span><span className="font-medium">₹ {(submissionData.sectionE.researchProjects['22-23'] / 10000000).toFixed(1)}Cr</span></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Seed Money</p>
                <div className="space-y-1 text-sm text-slate-700">
                  <div className="flex justify-between"><span>24-25:</span><span className="font-medium">₹ {(submissionData.sectionE.seedMoney['24-25'] / 1000000).toFixed(1)}M</span></div>
                  <div className="flex justify-between"><span>23-24:</span><span className="font-medium">₹ {(submissionData.sectionE.seedMoney['23-24'] / 1000000).toFixed(1)}M</span></div>
                  <div className="flex justify-between"><span>22-23:</span><span className="font-medium">₹ {(submissionData.sectionE.seedMoney['22-23'] / 1000000).toFixed(1)}M</span></div>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-slate-800 mb-3 mt-6 text-sm uppercase tracking-wide">Incubation Centers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">24-25</p>
                <p className="text-2xl font-bold text-slate-800">{submissionData.sectionE.incubationCentres['24-25']}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">23-24</p>
                <p className="text-2xl font-bold text-slate-800">{submissionData.sectionE.incubationCentres['23-24']}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">22-23</p>
                <p className="text-2xl font-bold text-slate-800">{submissionData.sectionE.incubationCentres['22-23']}</p>
              </div>
            </div>

            <ScoreInput section="sectionE" />
          </Section>

          {/* Review Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 pb-4 border-b border-gray-200">Admin Review & Scoring</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Section A</p>
                <p className="text-lg font-bold text-slate-800">{scores.sectionA || '-'}/20</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Section B</p>
                <p className="text-lg font-bold text-slate-800">{scores.sectionB || '-'}/20</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Section C</p>
                <p className="text-lg font-bold text-slate-800">{scores.sectionC || '-'}/20</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Section D</p>
                <p className="text-lg font-bold text-slate-800">{scores.sectionD || '-'}/20</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Section E</p>
                <p className="text-lg font-bold text-slate-800">{scores.sectionE || '-'}/20</p>
              </div>
            </div>

            {Object.values(scores).every((s) => s !== '') && (
              <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200 mb-8">
                <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Overall Score</p>
                <p className="text-4xl font-bold text-slate-800">{(Object.values(scores).reduce((sum, score) => sum + (parseFloat(score) || 0), 0)).toFixed(2)}/100</p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Review Comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                rows="4"
                placeholder="Add review comments here..."
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleSubmitReview('accepted')}
                className="flex-1 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                aria-label="Accept submission"
              >
                <CheckCircle className="w-5 h-5" />
                Accept Submission
              </button>
              <button
                onClick={() => handleSubmitReview('rejected')}
                className="flex-1 px-6 py-3 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors flex items-center justify-center gap-2"
                aria-label="Reject submission"
              >
                <XCircle className="w-5 h-5" />
                Reject Submission
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-slate-500 py-8">
            <p>Review all sections carefully before submitting your decision</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubmissionDetailPage;