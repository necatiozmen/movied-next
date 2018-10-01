import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import AppStore from './AppStore';
import PlayStore from './PlayStore';
import WindowsStore from './WindowsStore';

const Icon = props => {
  switch (props.name) {
    case 'facebook':
      return <Facebook {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'appstore':
      return <AppStore {...props} />;
    case 'playstore':
      return <PlayStore {...props} />;
    case 'windowstore':
      return <WindowsStore {...props} />;
    default:
      return;
  }
};

export default Icon;
