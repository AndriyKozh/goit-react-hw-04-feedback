import PropTypes from 'prop-types';
function SectionTitle({ children }) {
  return <div>{children}</div>;
}

SectionTitle.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
