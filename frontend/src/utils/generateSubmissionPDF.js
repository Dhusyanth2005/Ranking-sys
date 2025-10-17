import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Generates a PDF from submission data
 * @param {Object} submissionData - The complete submission data object
 */
export const generateSubmissionPDF = (submissionData) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  let yPosition = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace = 20) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      pdf.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Header
  pdf.setFillColor(20, 184, 166); // Teal color
  pdf.rect(0, 0, pageWidth, 40, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text(submissionData.collegeName, margin, 20);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Submission ID: ${submissionData.id} | Submitted: ${submissionData.submittedAt}`, margin, 30);

  yPosition = 50;
  pdf.setTextColor(0, 0, 0);

  // Section Header Helper
  const addSectionHeader = (title) => {
    checkPageBreak(15);
    pdf.setFillColor(241, 245, 249);
    pdf.rect(margin, yPosition, contentWidth, 10, 'F');
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 65, 85);
    pdf.text(title, margin + 5, yPosition + 7);
    yPosition += 15;
  };

  // Data Row Helper
  const addDataRow = (label, value, indent = 0) => {
    checkPageBreak(12);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(71, 85, 105);
    pdf.text(label + ':', margin + indent, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(30, 41, 59);
    const labelWidth = pdf.getTextWidth(label + ':') + 5;
    const maxWidth = contentWidth - labelWidth - indent;
    const lines = pdf.splitTextToSize(String(value || 'N/A'), maxWidth);
    pdf.text(lines, margin + labelWidth + indent, yPosition);
    yPosition += Math.max(6, lines.length * 5);
  };

  // Table Helper using autoTable function directly
  const addTable = (headers, data, title = '') => {
    checkPageBreak(20);
    if (title) {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(51, 65, 85);
      pdf.text(title, margin, yPosition);
      yPosition += 7;
    }

    autoTable(pdf, {
      startY: yPosition,
      head: [headers],
      body: data,
      margin: { left: margin, right: margin },
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [241, 245, 249], textColor: [51, 65, 85], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      theme: 'grid',
      didDrawPage: (data) => {
        yPosition = data.cursor.y + 5;
      }
    });
  };

  // SECTION A: General Information
  addSectionHeader('Section A: General Information and Institute Details');
  addDataRow('Institution Name', submissionData.sectionA.institutionName);
  addDataRow('Year of Establishment', submissionData.sectionA.yearEstablished);
  addDataRow('Address', submissionData.sectionA.address);
  addDataRow('Pincode', submissionData.sectionA.pincode);
  addDataRow('State', submissionData.sectionA.state);
  addDataRow('Website', submissionData.sectionA.website);
  addDataRow('Head of Institution', submissionData.sectionA.headName);
  addDataRow('Institute Type', submissionData.sectionA.instituteType);
  addDataRow('Institute Category', submissionData.sectionA.instituteCategory);
  addDataRow('Affiliated University', submissionData.sectionA.affiliatedUniversity);
  addDataRow('AICTE Approval', `${submissionData.sectionA.aicteApprovalNo} | Dated: ${submissionData.sectionA.aicteDate}`);
  addDataRow('NBA Accreditation', `${submissionData.sectionA.nbaAccredited} | Valid till: ${submissionData.sectionA.nbaValidityDate}`);
  addDataRow('NAAC Accreditation', `Score: ${submissionData.sectionA.naacScore} | Valid till: ${submissionData.sectionA.naacValidityDate}`);
  addDataRow('Other Accreditation', submissionData.sectionA.otherAccreditation);
  addDataRow('Applicant Name', submissionData.sectionA.applicantName);
  addDataRow('Applicant Designation', submissionData.sectionA.applicantDesignation);
  addDataRow('Contact Number', submissionData.sectionA.applicantContact);
  addDataRow('Email', submissionData.sectionA.applicantEmail);

  // SECTION B: Gender Information, Diversity and Finance
  checkPageBreak(30);
  addSectionHeader('Section B: Gender Information, Diversity and Finance');
  
  const genderData = submissionData.sectionB.genderInfo.map(row => [
    row.gender, row['25-26'], row['24-25'], row['23-24']
  ]);
  addTable(['Gender', '25-26', '24-25', '23-24'], genderData, 'Gender Information (Students Admitted)');

  const diversityData = submissionData.sectionB.diversityInfo.map(row => [
    row.category, row['25-26'], row['24-25'], row['23-24']
  ]);
  addTable(['Category', '25-26', '24-25', '23-24'], diversityData, 'Diversity Information');

  const examData = submissionData.sectionB.examScores.map(row => [
    row.slNo, row.department, row.examName, row.highestRank, row.lowestRank
  ]);
  addTable(['Sl.No', 'Department', 'Exam Name', 'Highest Rank', 'Lowest Rank'], examData, 'Exam Scores and Rank Details');

  checkPageBreak(20);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Financial Details (Last Academic Year)', margin, yPosition);
  yPosition += 7;
  addDataRow('Average Tuition Fees (per year)', `₹ ${Number(submissionData.sectionB.avgTuitionFees).toLocaleString('en-IN')}`);
  addDataRow('Other Fees (per year)', `₹ ${Number(submissionData.sectionB.otherFees).toLocaleString('en-IN')}`);
  addDataRow('Hostel Fees (per year)', `₹ ${Number(submissionData.sectionB.hostelFees).toLocaleString('en-IN')}`);
  addDataRow('Total Teaching Staff Expenses', `₹ ${Number(submissionData.sectionB.teachingSalaryExpense).toLocaleString('en-IN')}`);
  addDataRow('Total Lab Expenses', `₹ ${Number(submissionData.sectionB.labExpenses).toLocaleString('en-IN')}`);
  addDataRow('Per Student Expenditure', `₹ ${Number(submissionData.sectionB.perStudentExpenditure).toLocaleString('en-IN')}`);

// SECTION C: Academics
checkPageBreak(30);
addSectionHeader('Section C: Academics');

// Specialization Details
const specializationData = submissionData.sectionC.specialization.map(row => [
  row.department,
  row['25-26'].intake, row['25-26'].filled, row['25-26'].percentage.toFixed(2),
  row['24-25'].intake, row['24-25'].filled, row['24-25'].percentage.toFixed(2),
  row['23-24'].intake, row['23-24'].filled, row['23-24'].percentage.toFixed(2)
]);
addTable(
  ['Department', 'Intake', 'Filled', '%', 'Intake', 'Filled', '%', 'Intake', 'Filled', '%'],
  specializationData,
  'Specialization Details - Student Admission'
);

// Faculty Details
const facultyData = submissionData.sectionC.facultyDetails.map(row => [
  row.department, row.intake,
  row['25-26'].prof, row['25-26'].asp, row['25-26'].ap,
  row['24-25'].prof, row['24-25'].asp, row['24-25'].ap,
  row['23-24'].prof, row['23-24'].asp, row['23-24'].ap
]);
addTable(
  ['Department', 'Intake', 'Prof', 'ASP', 'AP', 'Prof', 'ASP', 'AP', 'Prof', 'ASP', 'AP'],
  facultyData,
  'Faculty Details'
);

// PhD Holders
const phdData = submissionData.sectionC.phdHolders.map(row => [
  row.year, row.totalFaculty, row.phdHolders, row.percentage.toFixed(2)
]);
addTable(['Year', 'Total Faculty', 'PhD Holders', 'Percentage'], phdData, 'PhD Holders (Permanent Faculty)');

// Placement, Higher Education, and Entrepreneurship
const placementData = submissionData.sectionC.placementData.map(row => [
  row.department,
  row['25-26'].a, row['25-26'].b, row['25-26'].c,
  row['24-25'].a, row['24-25'].b, row['24-25'].c,
  row['23-24'].a, row['23-24'].b, row['23-24'].c
]);
addTable(
  ['Department', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C'],
  placementData,
  'Placement, Higher Education, and Entrepreneurship'
);

// Placement Summary
const placementSummaryData = submissionData.sectionC.placementSummary.map(row => [
  row.department,
  row['25-26'].n, row['25-26'].x, ((Number(row['25-26'].x) / Number(row['25-26'].n)) * 100).toFixed(2),
  row['24-25'].n, row['24-25'].x, ((Number(row['24-25'].x) / Number(row['24-25'].n)) * 100).toFixed(2),
  row['23-24'].n, row['23-24'].x, ((Number(row['23-24'].x) / Number(row['23-24'].n)) * 100).toFixed(2)
]);
addTable(
  ['Department', 'N', 'X', '%', 'N', 'X', '%', 'N', 'X', '%'],
  placementSummaryData,
  'Placement Summary'
);

// Student Contact Details
const studentContactData = submissionData.sectionC.studentContactDetails.map(row => [
  row.slNo, row.nameAndDepartment, row.email
]);
addTable(['Sl.No', 'Name and Department', 'E-Mail Id'], studentContactData, 'Student Contact Details (Last Passed Out Batch)');

// Placement Salary Details
const salaryData = submissionData.sectionC.salaryDetails.map(row => [
  row.particular,
  `₹${Number(row['24-25']).toLocaleString('en-IN')}`,
  `₹${Number(row['23-24']).toLocaleString('en-IN')}`,
  `₹${Number(row['22-23']).toLocaleString('en-IN')}`
]);
addTable(['Particular', '24-25', '23-24', '22-23'], salaryData, 'Placement Salary Details');

// Active MoUs
const mouData = [
  ['24-25', submissionData.sectionC.activeMoUs['24-25'] || 0],
  ['23-24', submissionData.sectionC.activeMoUs['23-24'] || 0],
  ['22-23', submissionData.sectionC.activeMoUs['22-23'] || 0],
  ['Total', Object.values(submissionData.sectionC.activeMoUs).reduce((sum, val) => sum + Number(val), 0)]
];
addTable(['Year', 'No. of Active MoUs'], mouData, 'Active MoUs');

// Other Academic Details
checkPageBreak(20);
addDataRow('NEP 2020 Implementation', submissionData.sectionC.nepImplementation);
addDataRow('Multiple Entry & Exit Scheme', submissionData.sectionC.multipleEntryExit);
addDataRow('Inter College Competitions', submissionData.sectionC.interCollegeCompetitions);
addDataRow('Intra College Competitions', submissionData.sectionC.intraCollegeCompetitions);
addDataRow('Clubs and Societies', submissionData.sectionC.clubsSocieties);
addDataRow('Mentor-Mentee Ratio', submissionData.sectionC.mentorMenteeRatio);
addDataRow('Student Counsellor Available', submissionData.sectionC.studentCounsellor);
addDataRow('Programs Conducted (Yoga, etc.)', submissionData.sectionC.programsConducted);

// MoUs with Foreign Universities
checkPageBreak(20);
addDataRow('MoUs with Foreign Universities', submissionData.sectionC.hasForeignMoUs ? 'Yes' : 'No');
if (submissionData.sectionC.hasForeignMoUs && submissionData.sectionC.foreignMoUs?.length > 0) {
  const foreignMouData = submissionData.sectionC.foreignMoUs.map(row => [
    row.slNo, row.university, row.country, row.validUpto, row.link
  ]);
  addTable(['Sl.No', 'University', 'Country', 'Valid Upto', 'Link'], foreignMouData, 'MoUs with Foreign Universities');
}

// Foreign Language Training
checkPageBreak(20);
addDataRow('Foreign Language Training', submissionData.sectionC.foreignLanguageTraining);
addDataRow('Certificate Details', `<a href="${submissionData.sectionC.foreignLanguageCertLink}">View Certification Details</a>`);

  // SECTION D: Infrastructure
  checkPageBreak(30);
  addSectionHeader('Section D: Infrastructure');
  addDataRow('Campus Area (sq.ft)', submissionData.sectionD.campusArea);
  addDataRow('Total Built-up Area (sq.ft)', submissionData.sectionD.builtUpArea);
  addDataRow('Number of Classrooms', submissionData.sectionD.classrooms);
  addDataRow('Number of Laboratories', submissionData.sectionD.laboratories);
  addDataRow('Faculty Cabins', submissionData.sectionD.facultyCabins);
  addDataRow('Conference/Discussion Halls', submissionData.sectionD.conferenceHalls);
  addDataRow('Auditoriums', submissionData.sectionD.auditoriums);
  addDataRow('Student Computer Ratio', submissionData.sectionD.studentComputerRatio);
  addDataRow('STP Plant', `${submissionData.sectionD.stpPlant} | Output: ${submissionData.sectionD.stpOutcome}`);
  addDataRow('Central Library Area (sq.ft)', submissionData.sectionD.centralLibrary);
  addDataRow('Total Book Volumes', submissionData.sectionD.booksVolumes);
  addDataRow('Digital Library', submissionData.sectionD.digitalLibrary);
  addDataRow('Wi-Fi Connectivity', submissionData.sectionD.wifi);
  addDataRow('IQAC Established', `${submissionData.sectionD.iqac} | Date: ${submissionData.sectionD.iqacEstablished}`);

  // Hostel Details
  if (submissionData.sectionD.hostelDetails?.length > 0) {
    const hostelData = submissionData.sectionD.hostelDetails.map(row => [
      row.type, row.rooms, row.capacity, row.occupied
    ]);
    addTable(['Type', 'Rooms', 'Capacity', 'Occupied'], hostelData, 'Hostel Details');
  }

  // Sports Facilities
  if (submissionData.sectionD.sportsFacilities?.length > 0) {
    const sportsData = submissionData.sectionD.sportsFacilities.map(row => [
      row.facility, row.area
    ]);
    addTable(['Facility', 'Area'], sportsData, 'Sports Facilities');
  }

  // SECTION E: Research
  checkPageBreak(30);
  addSectionHeader('Section E: Research');

  const journalData = submissionData.sectionE.journalPublications.map(row => [
    row.type, row['24-25'], row['23-24'], row['22-23']
  ]);
  addTable(['Publication Type', '24-25', '23-24', '22-23'], journalData, 'Journal Publications');

  const patentData = submissionData.sectionE.patents.map(row => [
    row.particular,
    row.particular === 'Percentage' ? `${row['24-25']}%` : row['24-25'],
    row.particular === 'Percentage' ? `${row['23-24']}%` : row['23-24'],
    row.particular === 'Percentage' ? `${row['22-23']}%` : row['22-23']
  ]);
  addTable(['Particular', '24-25', '23-24', '22-23'], patentData, 'Patents Details');

  const researchProjectData = [
    ...submissionData.sectionE.researchProjects.map(row => [
      row.id,
      row.particular,
      `₹ ${Number(row['24-25']).toLocaleString('en-IN')}`,
      `₹ ${Number(row['23-24']).toLocaleString('en-IN')}`,
      `₹ ${Number(row['22-23']).toLocaleString('en-IN')}`
    ]),
    [
      'Total',
      '',
      `₹ ${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['24-25']), 0).toLocaleString('en-IN')}`,
      `₹ ${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['23-24']), 0).toLocaleString('en-IN')}`,
      `₹ ${submissionData.sectionE.researchProjects.reduce((sum, row) => sum + Number(row['22-23']), 0).toLocaleString('en-IN')}`
    ]
  ];
  addTable(['Sl.No', 'Particular', '24-25', '23-24', '22-23'], researchProjectData, 'Research Projects (Government)');

  // Save the PDF
  pdf.save(`${submissionData.collegeName}_Submission_${submissionData.id}.pdf`);
};

export default generateSubmissionPDF;