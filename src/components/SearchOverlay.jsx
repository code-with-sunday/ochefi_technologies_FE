import * as React from "react";

export const SearchOverlay = () => {
    return (
        <>
            {/* Search Overlay */}
            <div className="search-overlay">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-layer" />
                        <div className="search-layer" />
                        <div className="search-layer" />
                        <div className="search-close">
                            <span className="search-close-line" />
                            <span className="search-close-line" />
                        </div>
                        <div className="search-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit"><i className="bx bx-search" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Overlay */}

        </>
    )
}