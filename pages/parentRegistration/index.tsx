import ParentRegistration from '../../components/Parent/ParentRegistration_8'
import Page1 from '../../components/Parent/child_components/page1'
import { useState } from 'react'
import ParentRegistration_1 from '@/components/Parent/1'
import ParentRegistration_2 from '@/components/Parent/2'
import ParentRegistration_3 from '@/components/Parent/3'
import ParentRegistration_4 from '@/components/Parent/4'
import { ParentFormProps } from 'utils/types'
import ParentRegistration_5 from '@/components/Parent/5'
import ParentRegistration_6 from '@/components/Parent/6'
import ParentRegistration_7 from '@/components/Parent/7'
import ParentRegistration_8 from '@/components/Parent/8'
import ParentRegistration_9 from '@/components/Parent/9'
import ParentRegistration_10 from '@/components/Parent/10'
import ParentRegistration_11 from '@/components/Parent/11'
import ParentRegistration_12 from '@/components/Parent/12'

export default function ParentReg() {
  const [page, setPage] = useState(1)
  var InitialParentForm: ParentFormProps = {
    name: '',
    phone: '',
    location: '',
    pt_id: 0,
    st_name: '',
    st_gender: '',
    st_age: 0,
    st_grade: '',
    st_school: '',
    st_subject: [],
    days: 0,
    hours: 0,
  }
  const [formData, setFormData] = useState(InitialParentForm)
  const PageDisplay = () => {
    // if (page === 0) {
    //   return <ParentRegistration_2 formData={formData} setFormData={setFormData} />;
    // } else if (page === 1) {
    //   return <ParentRegistration_3 formData={formData} setFormData={setFormData} />;
    // } else {
    //   return <OtherInfo formData={formData} setFormData={setFormData} />;
    // }
    switch (page) {
      case 1:
        return (
          <ParentRegistration_1
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 2:
        return (
          <ParentRegistration_2
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 3:
        return (
          <ParentRegistration_3
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 4:
        return (
          <ParentRegistration_4
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 5:
        return (
          <ParentRegistration_5
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 6:
        return (
          <ParentRegistration_6
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 7:
        return (
          <ParentRegistration_7
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 8:
        return (
          <ParentRegistration_8
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 9:
        return (
          <ParentRegistration_9
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 10:
        return (
          <ParentRegistration_10
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 11:
        return (
          <ParentRegistration_11
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )
      case 12:
        return (
          <ParentRegistration_12
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
          />
        )

      default:
        return (
          <ParentRegistration_2
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
