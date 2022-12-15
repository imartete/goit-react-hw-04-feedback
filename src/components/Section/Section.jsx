import PropTypes from 'prop-types';
import css from './Section.modules.css';

export const Section = ({ children, title }) => {
  return (
    <section className="section">
      <h1>{title ? title : 'Your title'}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
