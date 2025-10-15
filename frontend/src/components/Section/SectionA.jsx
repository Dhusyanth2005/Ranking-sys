import { useState } from "react";
import { ChevronRight } from "lucide-react";

const SectionA = ({ formData, setFormData, onNext }) => {
  const [loading, setLoading] = useState(false);
  const [submissionId, setSubmissionId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Map frontend formData to backend field names
    const payload = {
      nameOfInstitution: formData.institutionName,
      yearOfEstablishment: formData.yearEstablished,
      address: formData.address,
      pinCode: formData.pinCode,
      state: formData.state,
      instituteWebsite: formData.website,
      headOfInstitution: formData.headName,
      instituteType: formData.instituteType === "Others" ? formData.instituteTypeOther || "Others" : formData.instituteType,
      instituteCategory: formData.instituteCategory === "Others" ? formData.instituteCategoryOther || "Others" : formData.instituteCategory,
      affiliatedUniversity: formData.affiliatedUniversity,
      aicteApproval: formData.aicteApproval,
      nbaAccredited: formData.nbaAccredited,
      naacAccredited: formData.naacAccredited,
      otherAccreditations: formData.otherAccreditation,
      applicantName: formData.applicantName,
      applicantDesignation: formData.applicantDesignation,
      applicantContact: formData.applicantContact,
      applicantEmail: formData.applicantEmail,
      driveLink: formData.driveLink,
      ...(formData.naacAccredited === "yes" && {
        naacScore: formData.naacScore,
        naacValidityDate: formData.naacValidityDate,
      }),
      ...(formData.nbaAccredited === "yes" && {
        nbaValidityDate: formData.nbaValidityDate,
      }),
    };

    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (!isEditing) {
        setSubmissionId("demo-123");
        setIsEditing(true);
      }
      
      alert(isEditing ? "Section A updated successfully" : "Section A submitted successfully");
    } catch (error) {
      alert("Failed to submit Section A");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    // Validate required fields before proceeding
    const requiredFields = [
      'institutionName', 
      'yearEstablished', 
      'address', 
      'pinCode', 
      'applicantName', 
      'applicantDesignation', 
      'applicantContact', 
      'applicantEmail',
      'instituteType',
      'instituteCategory',
    ];
    
    // Additional validation for "Others"
    const additionalFields = [];
    if (formData.instituteType === "Others" && !formData.instituteTypeOther) {
      additionalFields.push("instituteTypeOther");
    }
    if (formData.instituteCategory === "Others" && !formData.instituteCategoryOther) {
      additionalFields.push("instituteCategoryOther");
    }

    const missingFields = [
      ...requiredFields.filter(field => !formData[field]),
      ...additionalFields,
    ];
    
    // if (missingFields.length > 0) {
    //   alert(`Please fill in the following required fields: ${missingFields.join(", ")}`);
    //   return;
    // }
    
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Section A: Institution Details
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Please provide accurate information about your educational institution. All fields marked with an asterisk
            (*) are required for processing your application.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <span className="ml-3 text-gray-700 font-medium">Loading...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Institution Details */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Basic Institution Details</h2>
              <p className="text-teal-100">Provide fundamental information about your institution</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="institutionName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name of the Institution *
                  </label>
                  <input
                    id="institutionName"
                    type="text"
                    value={formData.institutionName || ""}
                    onChange={(e) => handleInputChange("institutionName", e.target.value)}
                    placeholder="Enter institution name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="yearEstablished" className="block text-sm font-semibold text-gray-900 mb-2">
                    Year of Establishment *
                  </label>
                  <input
                    id="yearEstablished"
                    type="number"
                    value={formData.yearEstablished || ""}
                    onChange={(e) => handleInputChange("yearEstablished", e.target.value)}
                    placeholder="e.g., 1995"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                  Address of the Institution *
                </label>
                <textarea
                  id="address"
                  value={formData.address || ""}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter complete address"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="pinCode" className="block text-sm font-semibold text-gray-900 mb-2">
                    Pin Code *
                  </label>
                  <input
                    id="pinCode"
                    type="number"
                    value={formData.pinCode || ""}
                    onChange={(e) => handleInputChange("pinCode", e.target.value)}
                    placeholder="000000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    value={formData.state || ""}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900"
                  >
                    <option value="">Select state</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="west-bengal">West Bengal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                    Institute Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={formData.website || ""}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://www.example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="headName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name of Head of the Institution
                </label>
                <input
                  id="headName"
                  type="text"
                  value={formData.headName || ""}
                  onChange={(e) => handleInputChange("headName", e.target.value)}
                  placeholder="Enter head's name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Institute Classification */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Institute Classification</h2>
              <p className="text-teal-100">Select the appropriate type and category for your institution</p>
            </div>
            <div className="p-8 space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Institute Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Government", "Private aided", "Private un-aided", "Others"].map((type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={`type-${type}`}
                        name="instituteType"
                        value={type}
                        checked={formData.instituteType === type}
                        onChange={(e) => handleInputChange("instituteType", e.target.value)}
                        className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor={`type-${type}`} className="text-gray-900 font-medium cursor-pointer">
                        {type}
                      </label>
                      {type === "Others" && formData.instituteType === "Others" && (
                        <input
                          type="text"
                          placeholder="Specify other type"
                          value={formData.instituteTypeOther || ""}
                          onChange={(e) => handleInputChange("instituteTypeOther", e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">Institute Category</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Central University", "State University", "Deemed to be University", "Others"].map((category) => (
                    <div key={category} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="instituteCategory"
                        value={category}
                        checked={formData.instituteCategory === category}
                        onChange={(e) => handleInputChange("instituteCategory", e.target.value)}
                        className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor={`category-${category}`} className="text-gray-900 font-medium cursor-pointer">
                        {category}
                      </label>
                      {category === "Others" && formData.instituteCategory === "Others" && (
                        <input
                          type="text"
                          placeholder="Specify other category"
                          value={formData.instituteCategoryOther || ""}
                          onChange={(e) => handleInputChange("instituteCategoryOther", e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="affiliatedUniversity" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name of the Affiliated University
                  </label>
                  <input
                    id="affiliatedUniversity"
                    type="text"
                    value={formData.affiliatedUniversity || ""}
                    onChange={(e) => handleInputChange("affiliatedUniversity", e.target.value)}
                    placeholder="Enter affiliated university name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="aicteApproval" className="block text-sm font-semibold text-gray-900 mb-2">
                    AICTE Approval No and Date
                  </label>
                  <input
                    id="aicteApproval"
                    type="text"
                    value={formData.aicteApproval || ""}
                    onChange={(e) => handleInputChange("aicteApproval", e.target.value)}
                    placeholder="Enter approval number and date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Accreditation Information */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Accreditation Information</h2>
              <p className="text-teal-100">Provide details about your institution's accreditation status</p>
            </div>
            <div className="p-8 space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Is institute accredited by NBA?</label>
                <div className="flex space-x-6 mb-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="nba-yes"
                      name="nbaAccredited"
                      checked={formData.nbaAccredited === "yes"}
                      onChange={() => handleInputChange("nbaAccredited", "yes")}
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="nba-yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="nba-no"
                      name="nbaAccredited"
                      checked={formData.nbaAccredited === "no"}
                      onChange={() => handleInputChange("nbaAccredited", "no")}
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="nba-no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
                {formData.nbaAccredited === "yes" && (
                  <div>
                    <label htmlFor="nbaValidityDate" className="block text-sm font-semibold text-gray-900 mb-2">
                      Latest date of validity
                    </label>
                    <input
                      id="nbaValidityDate"
                      type="date"
                      value={formData.nbaValidityDate || ""}
                      onChange={(e) => handleInputChange("nbaValidityDate", e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900"
                    />
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">Is institute accredited by NAAC?</label>
                <div className="flex space-x-6 mb-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="naac-yes"
                      name="naacAccredited"
                      checked={formData.naacAccredited === "yes"}
                      onChange={() => handleInputChange("naacAccredited", "yes")}
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="naac-yes" className="text-gray-900 font-medium cursor-pointer">Yes</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="naac-no"
                      name="naacAccredited"
                      checked={formData.naacAccredited === "no"}
                      onChange={() => handleInputChange("naacAccredited", "no")}
                      className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                    />
                    <label htmlFor="naac-no" className="text-gray-900 font-medium cursor-pointer">No</label>
                  </div>
                </div>
                {formData.naacAccredited === "yes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="naacScore" className="block text-sm font-semibold text-gray-900 mb-2">
                        NAAC Score
                      </label>
                      <input
                        id="naacScore"
                        type="text"
                        value={formData.naacScore || ""}
                        onChange={(e) => handleInputChange("naacScore", e.target.value)}
                        placeholder="e.g., 3.25"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="naacValidityDate" className="block text-sm font-semibold text-gray-900 mb-2">
                        Latest validity date
                      </label>
                      <input
                        id="naacValidityDate"
                        type="date"
                        value={formData.naacValidityDate || ""}
                        onChange={(e) => handleInputChange("naacValidityDate", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="otherAccreditation" className="block text-sm font-semibold text-gray-900 mb-2">
                  Details of Other Accreditation (e.g., ABET, etc.)
                </label>
                <textarea
                  id="otherAccreditation"
                  value={formData.otherAccreditation || ""}
                  onChange={(e) => handleInputChange("otherAccreditation", e.target.value)}
                  placeholder="Enter details of other accreditations"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Applicant Details */}
          <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Applicant Details</h2>
              <p className="text-teal-100">Information about the person submitting this application</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="applicantName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name of the Applicant *
                  </label>
                  <input
                    id="applicantName"
                    type="text"
                    value={formData.applicantName || ""}
                    onChange={(e) => handleInputChange("applicantName", e.target.value)}
                    placeholder="Enter applicant's full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="applicantDesignation" className="block text-sm font-semibold text-gray-900 mb-2">
                    Designation of the Applicant *
                  </label>
                  <input
                    id="applicantDesignation"
                    type="text"
                    value={formData.applicantDesignation || ""}
                    onChange={(e) => handleInputChange("applicantDesignation", e.target.value)}
                    placeholder="e.g., Principal, Director"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="applicantContact" className="block text-sm font-semibold text-gray-900 mb-2">
                    Applicant Contact Number *
                  </label>
                  <input
                    id="applicantContact"
                    type="tel"
                    value={formData.applicantContact || ""}
                    onChange={(e) => handleInputChange("applicantContact", e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="applicantEmail" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email of the Applicant *
                  </label>
                  <input
                    id="applicantEmail"
                    type="email"
                    value={formData.applicantEmail || ""}
                    onChange={(e) => handleInputChange("applicantEmail", e.target.value)}
                    placeholder="applicant@institution.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex justify-between items-center pt-8">
            {/* Submit/Save and Next buttons */}
            <div className="flex space-x-4 ml-auto">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  isEditing ? "Save Changes" : "Save Section A"
                )}
              </button>

              {onNext && (
                <button
                  type="button"
                  className="flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={handleNext}
                >
                  Continue to Section B
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </form>
        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-teal-200">
          <p className="text-gray-600">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@institution.edu" className="text-teal-600 hover:text-teal-700 font-medium">
              support@institution.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionA;