import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconArrowBack = () => {
  return (
    <Svg width={12} height={20} viewBox="0 0 12 20" fill="none">
      <Path
        d="M.307 10.138c0 .218.04.425.12.62.087.19.22.371.402.545l8.385 8.2c.276.276.613.413 1.012.413.276 0 .523-.065.741-.195.225-.131.403-.305.534-.523.138-.218.206-.465.206-.74 0-.4-.152-.756-.457-1.068l-7.459-7.252 7.46-7.252c.304-.305.456-.66.456-1.067 0-.269-.069-.512-.207-.73a1.447 1.447 0 00-.533-.533 1.411 1.411 0 00-.74-.196c-.4 0-.737.138-1.013.414L.829 8.973a1.906 1.906 0 00-.392.544c-.08.19-.123.396-.13.621z"
        fill="#0A84FF"
      />
    </Svg>
  );
};

export default IconArrowBack;
