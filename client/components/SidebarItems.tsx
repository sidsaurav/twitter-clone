import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type SidebarItemsProps = {
  icon: IconProp,
  content: string
}

const SidebarItems = ({icon, content}: SidebarItemsProps) => {
  return (
    <div className="flex mb-6 gap-6 items-center font-medium text-xl">
      <FontAwesomeIcon icon={icon} style={{color: "#fff"}} />
      <span>{content}</span>
    </div>
  )
}

export default SidebarItems