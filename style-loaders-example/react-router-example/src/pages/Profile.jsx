export default function Profile(props) {
  const userid = props.match.params.userid;
  console.log(userid, typeof userid);
  return (
    <div>
      <h2>Profile 입니다.</h2>
      {userid && <p>userid는 {userid} 입니다.</p>}
    </div>
  );
}
