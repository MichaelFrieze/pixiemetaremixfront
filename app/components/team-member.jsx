export const TeamMember = ({ teamMember }) => {
  console.log(teamMember);
  return (
    <li>
      <div className="space-y-6">
        {teamMember.attributes.image?.data?.attributes?.formats?.thumbnail
          ?.url && (
          <img
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            srcSet={
              teamMember.attributes.image.data.attributes.formats.thumbnail.url
            }
            alt=""
          />
        )}
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{teamMember.attributes.name}</h3>
            <p className="text-indigo-600">{teamMember.attributes.role}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
