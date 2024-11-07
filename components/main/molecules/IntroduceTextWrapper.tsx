import Tag from '@/components/tags/Tag'
import { RoughNotation } from 'react-rough-notation'

const INTERESTED_TECH_TAGS = ['Minecraft', 'System administration']

const IntroduceTextWrapper = () => {
  return (
    <div className="">
      <div className="h-auto flex flex-col xl:flex-row gap w-full">
        {INTERESTED_TECH_TAGS.map((tag, index) => {
          return (
            <div key={index} className="p-1">
              <Tag text={tag} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IntroduceTextWrapper
