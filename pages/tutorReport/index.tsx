import ParentRegistration from '../../components/Parent/ParentRegistration_8'
import Page1 from '../../components/Parent/child_components/page1'
import { useState } from 'react'

import { ReportFormProps } from 'utils/types'

import ReportRegistration_1 from '@/components/Report/1'
import ReportRegistration_2 from '@/components/Report/2'
import ReportRegistration_3 from '@/components/Report/3'
import ReportRegistration_4 from '@/components/Report/4'
import ReportRegistration_5 from '@/components/Report/5'
import ReportRegistration_6 from '@/components/Report/6'
import ReportRegistration_7 from '@/components/Report/7'
import ReportRegistration_8 from '@/components/Report/8'

export default function TutReport() {
  const [page, setPage] = useState(1)
  var InitialReportForm: ReportFormProps = {
    professionality: '',
    assg: '',
    noDays: '',
    feedback: '',
    semiTotalHour: '',
    quiz: '',
    test: '',
    envChallenge: '',
    envHelp: '',
    envResponse: '',
    yourChallenge: '',
    yourHelp: '',
    yourResponse: '',
    tuteeChallenge: '',
    tuteeHelp: '',
    tuteeResponse: '',
    subjects: '',
    topics: '',
  }
  const [formData, setFormData] = useState(InitialReportForm)
  const PageDisplay = () => {
    switch (page) {
      case 1:
        return (
          <ReportRegistration_1
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 2:
        return (
          <ReportRegistration_2
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 3:
        return (
          <ReportRegistration_3
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 4:
        return (
          <ReportRegistration_4
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 5:
        return (
          <ReportRegistration_5
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 6:
        return (
          <ReportRegistration_6
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 7:
        return (
          <ReportRegistration_7
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 8:
        return (
          <ReportRegistration_8
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )

      default:
        return (
          <ReportRegistration_1
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
    }
  }
  return <ParentRegistration>{PageDisplay()}</ParentRegistration>
}
