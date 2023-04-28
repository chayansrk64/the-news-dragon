import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2 >Our Terms and Conditions</h2>
            <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nam earum. Eaque, expedita veniam fugit minima architecto sapiente tempora vitae illo minus dicta consectetur provident alias tempore rem iusto quasi voluptate eveniet. Quos, beatae delectus veritatis repellat, fugit necessitatibus hic laborum dignissimos facere labore explicabo esse voluptatem nobis assumenda vitae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ullam ab vitae fuga. Adipisci pariatur magni veritatis laborum, tenetur necessitatibus vero accusantium ratione iusto voluptatem repellendus delectus minima neque voluptatibus culpa corrupti earum quibusdam ipsum illum. Officiis cupiditate sapiente aspernatur sunt atque inventore, harum, nobis ullam nesciunt iusto, repellat reiciendis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis sit neque porro obcaecati eius esse, quidem eligendi accusantium incidunt qui dolor, provident praesentium autem laudantium sunt exercitationem suscipit voluptates eaque unde eveniet quibusdam! Reprehenderit, iste debitis adipisci commodi blanditiis quia quis quos. Atque voluptate a incidunt consequuntur ab? Iure!
            </p>  
           
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;