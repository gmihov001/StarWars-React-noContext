import React from "react";
import PropTypes from "prop-types";

export const CharacterCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src="http://via.placeholder.com/400x200"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Gender: {props.gender}
					<br />
					Hair Color: {props.hair_color}
					<br />
					Eye-Color: {props.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					{/* <Link to={`/details/${props.index + 1}`}>
						<a href="#" className="btn  btn-outline-primary">
							Learn more!
						</a>
					</Link> */}
					{/* {const isFav = store.favorites.find( f => f.name ==
					props.name )}  */}
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={() => this.addToFavorites(props.name)}>
						{/* {isFav ? (
							<i className="fas fa-heart" />
						) : (
							<i className="far fa-heart" />
						)} */}
					</button>
					);
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string,
	species: PropTypes.array,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	index: PropTypes.number
};
