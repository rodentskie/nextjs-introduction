interface Props {
  profileId: string;
};

export default function ProfileDetails({ params }: { params: Props }) {
  const { profileId } = params;
  
  return (
    <>
      <p>This is profile details {profileId} </p>
    </>
  );
}


