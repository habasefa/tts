type ReportJson = {
  tuteeName: string
  subject: string
  chapter: string
  topic: string
  understanding: string
  course: string
  units: string
  type: string
  result: string
}

type Topic = {
  topic: string
  understanding: string
}

type Chapter = {
  chapter: string
  topics: Topic[]
}

type Subject = {
  subject: string
  chapters: Chapter[]
}

type Type = {
  typ: string
  result: string
  type: string
}

type Unit = {
  unit: string
  types: Type[]
}

type Assessment = {
  course: string
  units: Unit[]
  assessment: string
}

type InputField = {
  name: string
  subjects: Subject[]
  assessments: Assessment[]
}

type FormattedReport = {
  inputFields: InputField[]
}

export function formatReport(reportJson: ReportJson[]): FormattedReport {
  const formatted: FormattedReport = { inputFields: [] }

  // Group reports by `tuteeName`
  const groupedByName = reportJson.reduce(
    (
      acc: Record<
        string,
        { subjects: Record<string, Chapter[]>; assessments: Assessment[] }
      >,
      report
    ) => {
      const {
        tuteeName,
        subject,
        chapter,
        topic,
        understanding,
        course,
        units,
        type,
        result,
      } = report

      if (!acc[tuteeName]) {
        acc[tuteeName] = { subjects: {}, assessments: [] }
      }

      // Handle Subjects and Chapters
      if (subject) {
        if (!acc[tuteeName].subjects[subject]) {
          acc[tuteeName].subjects[subject] = []
        }
        const chapterObj = acc[tuteeName].subjects[subject].find(
          (ch) => ch.chapter === chapter
        )
        if (chapterObj) {
          chapterObj.topics.push({ topic, understanding })
        } else {
          acc[tuteeName].subjects[subject].push({
            chapter,
            topics: [{ topic, understanding }],
          })
        }
      }

      // Handle Assessments
      if (course || units || type || result) {
        acc[tuteeName].assessments.push({
          course: course || '',
          units: [
            {
              unit: units || 'Nothing',
              types: [
                {
                  typ: type || '',
                  result: result || 'Nothing',
                  type: type || 'Nothing',
                },
              ],
            },
          ],
          assessment: 'Nothing',
        })
      }

      return acc
    },
    {}
  )

  // Transform grouped data into the final structure
  Object.entries(groupedByName).forEach(([name, data]) => {
    const subjects: Subject[] = Object.entries(data.subjects).map(
      ([subjectName, chapters]) => ({
        subject: subjectName,
        chapters,
      })
    )
    const assessments: Assessment[] =
      data.assessments.length > 0
        ? data.assessments
        : [
            {
              course: '',
              units: [
                {
                  unit: 'Nothing',
                  types: [
                    {
                      typ: '',
                      result: 'Nothing',
                      type: 'Nothing',
                    },
                  ],
                },
              ],
              assessment: 'Nothing',
            },
          ]
    formatted.inputFields.push({
      name,
      subjects,
      assessments,
    })
  })

  return formatted
}
