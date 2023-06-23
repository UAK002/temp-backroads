const SocialLink = ({ href, icon, itemClass }) => {
  return (
    // <li key={id}>
    <li>
      {/* <a href={href} target="_blank" rel="noreferrer" className="nav-icon"> */}
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
