import ProfileImage from './ProfileImage';
import Message from './Message';
import Timestamp from './Timesatamp';
import User from './User';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

// {
//   user: {
//     name: 'Thoughts of Dog®',
//     image: 'https://i.imgur.com/b0EdHVV.jpg',
//     handle: 'dog_feelings'
//   },
//   timestamp: '1h ago',
//   message:
//     'the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company'
// },
